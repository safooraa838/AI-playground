import React from 'react';
import { usePlayground } from '../context/PlaygroundContext';

const CategoryFilter: React.FC = () => {
  const { categories, selectedCategory, setSelectedCategory } = usePlayground();
  
  return (
    <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
      <h3 className="text-lg font-medium mb-4">Filter by Category</h3>
      
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
            selectedCategory === null
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted hover:bg-muted/70 text-foreground'
          }`}
        >
          All
        </button>
        
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
              selectedCategory === category
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted hover:bg-muted/70 text-foreground'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;