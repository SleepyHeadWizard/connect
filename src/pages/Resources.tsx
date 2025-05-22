import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
// Make sure this path is correct and the file exports these arrays
import { resources, categories, resourceTypes } from '../data/resourcesData';
import type { ResourceType, ResourceFilters, CategoryType } from '../types/resources';
// Import an icon for external links (you'll need to install react-icons: npm install react-icons)
import { FiExternalLink } from 'react-icons/fi';

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [selectedType, setSelectedType] = useState<ResourceFilters['type']>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = useMemo(() => {
    // Ensure resources is an array before filtering
    if (!Array.isArray(resources)) {
        console.error("Resources data is not an array:", resources);
        return [];
    }
    return resources.filter((resource) => {
      const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
      const matchesType = selectedType === 'all' || resource.type === selectedType;
      // Ensure properties exist before calling .toLowerCase() or .some()
      const titleMatch = resource.title && resource.title.toLowerCase().includes(searchQuery.toLowerCase());
      const descriptionMatch = resource.description && resource.description.toLowerCase().includes(searchQuery.toLowerCase());
      const tagMatch = resource.tags && resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesSearch = titleMatch || descriptionMatch || tagMatch;
      
      return matchesCategory && matchesType && matchesSearch;
    });
  }, [selectedCategory, selectedType, searchQuery, resources]); // Added resources to dependency array

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center sm:text-left">Resource Hub</h1>
        
        {/* Search and Filters */}
        <div className="mb-6 sm:mb-8 space-y-4 sm:space-y-6">
          <input
            type="text"
            placeholder="Search by title, description, or tag..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
          />
          
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6">
            <div className="space-y-2">
              <label htmlFor="category-filter" className="text-sm text-gray-400 font-medium">Category</label>
              <div id="category-filter" className="flex flex-wrap gap-2">
                {/* Ensure 'all' is an option, you might want to add it to your categories array in resourcesData.js */}
                {(!categories.map(c => c.toLowerCase()).includes('all')) && (
                     <button
                        onClick={() => setSelectedCategory('all')}
                        className={`px-4 py-2 rounded-full text-xs sm:text-sm ${
                        selectedCategory === 'all'
                            ? 'bg-blue-600 text-white font-semibold'
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                    >
                        All
                    </button>
                )}
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category as CategoryType)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="type-filter" className="text-sm text-gray-400 font-medium">Type</label>
              <div id="type-filter" className="flex flex-wrap gap-2">
                {/* Ensure 'all' is an option */}
                {(!resourceTypes.map(rt => rt.toLowerCase()).includes('all')) && (
                    <button
                        onClick={() => setSelectedType('all')}
                        className={`px-4 py-2 rounded-full text-xs sm:text-sm ${
                        selectedType === 'all'
                            ? 'bg-blue-600 text-white font-semibold'
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                    >
                        All
                    </button>
                )}
                {resourceTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type as ResourceType | 'all')}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm ${
                      selectedType === type
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02, boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.25)" }}
                transition={{ duration: 0.2 }}
                className="bg-gray-800 rounded-lg p-5 sm:p-6 shadow-xl flex flex-col h-full" // Added shadow-xl
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    resource.type === 'article' ? 'bg-purple-600 text-purple-100' :
                    resource.type === 'organization' ? 'bg-green-600 text-green-100' :
                    resource.type === 'app' ? 'bg-sky-600 text-sky-100' : // Use sky for apps
                    // resource.type === 'video' ? 'bg-red-600 text-red-100' : // Example for video
                    'bg-yellow-600 text-yellow-100' // Fallback
                  }`}>
                    {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                  </span>
                  {resource.rating && typeof resource.rating === 'number' && ( // Check type of rating
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.round(resource.rating!) ? 'text-yellow-400' : 'text-gray-600'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-1 text-xs text-gray-400">({resource.rating.toFixed(1)})</span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-100">{resource.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">{resource.description}</p>
                
                {resource.tags && resource.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-700 px-2 py-1 rounded-md text-xs text-gray-300 hover:bg-gray-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="mt-auto pt-4 border-t border-gray-700/60"> {/* Slightly stronger border */}
                  {resource.url ? (
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Learn more about ${resource.title} (opens in new tab)`} // Corrected & Enhanced Link
                      className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                      Learn More
                      <FiExternalLink className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-0.5" />
                    </a>
                  ) : (
                    <span className="text-sm text-gray-500 italic">Link not available</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 10h.01" /> {/* Changed to a search/empty icon */}
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-300">No Resources Found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search query or filters.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Resources;