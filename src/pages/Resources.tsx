import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { resources, categories, resourceTypes } from '../data/resourcesData';
import type { Resource, ResourceType, ResourceFilters, CategoryType } from '../types/resources';

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [selectedType, setSelectedType] = useState<ResourceFilters['type']>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
      const matchesType = selectedType === 'all' || resource.type === selectedType;
      const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesType && matchesSearch;
    });
  }, [selectedCategory, selectedType, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">Resource Hub</h1>
        
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <input
            type="text"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          
          <div className="flex flex-wrap gap-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Category</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category as CategoryType)}
                    className={`px-4 py-2 rounded-full text-sm ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Type</label>
              <div className="flex flex-wrap gap-2">
                {resourceTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type as ResourceType | 'all')}
                    className={`px-4 py-2 rounded-full text-sm ${
                      selectedType === type
                        ? 'bg-blue-600 text-white'
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs ${
                  resource.type === 'article' ? 'bg-purple-600' :
                  resource.type === 'organization' ? 'bg-green-600' :
                  resource.type === 'app' ? 'bg-blue-600' :
                  'bg-yellow-600'
                }`}>
                  {resource.type}
                </span>
                {resource.rating && (
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 text-sm">{resource.rating}</span>
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-gray-400 mb-4">{resource.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {resource.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 px-2 py-1 rounded-full text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-auto">
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No resources found matching your criteria. Try adjusting your filters.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Resources; 