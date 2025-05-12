import React from 'react';
import { Clock, MessageSquare } from 'lucide-react';
import { usePlayground, QueryHistory } from '../context/PlaygroundContext';

const HistoryList: React.FC = () => {
  const { history, selectedCategory } = usePlayground();
  
  // Filter history by category if selected
  const filteredHistory = selectedCategory
    ? history.filter(item => item.category === selectedCategory)
    : history;
  
  // Format date
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  // Truncate text
  const truncateText = (text: string, maxLength: number = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };
  
  if (filteredHistory.length === 0) {
    return (
      <div className="p-8 text-center">
        <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground" />
        <h3 className="mt-4 text-lg font-medium">No history found</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {selectedCategory 
            ? `No interactions in the ${selectedCategory} category yet.` 
            : 'Start generating responses to build your history.'}
        </p>
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      {filteredHistory.map((item: QueryHistory) => (
        <div 
          key={item.id}
          className="bg-card border border-border rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-card"
        >
          <div className="p-4">
            <div className="flex items-start justify-between">
              <h3 className="font-medium">{truncateText(item.prompt, 120)}</h3>
              <span className="text-xs flex items-center text-muted-foreground whitespace-nowrap ml-2">
                <Clock className="h-3 w-3 mr-1" />
                {formatDate(item.timestamp)}
              </span>
            </div>
            
            <div className="mt-3 flex flex-wrap gap-2">
              {item.responses.map(response => (
                <span 
                  key={response.modelId} 
                  className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-muted"
                >
                  {response.modelId}
                </span>
              ))}
              
              {item.category && (
                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-primary/10 text-primary">
                  {item.category}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistoryList;