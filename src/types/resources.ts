export type ResourceType = 'article' | 'organization' | 'app' | 'book';
export type CategoryType = 'all' | 'research' | 'self-help' | 'tools' | 'support';

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: ResourceType;
  category: Exclude<CategoryType, 'all'>;
  url: string;
  tags: string[];
  rating?: number;
  author?: string;
  publisher?: string;
  year?: number;
}

export interface ResourceFilters {
  type: ResourceType | 'all';
  category: CategoryType;
  searchQuery: string;
} 