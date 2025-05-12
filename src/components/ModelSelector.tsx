import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';
import { usePlayground, AIModel } from '../context/PlaygroundContext';

const ModelSelector: React.FC = () => {
  const { availableModels, selectedModels, toggleModel } = usePlayground();
  
  return (
    <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
      <h3 className="text-lg font-medium mb-4">Select Models</h3>
      <div className="space-y-3">
        {availableModels.map((model: AIModel) => (
          <div 
            key={model.id}
            className={`flex items-center justify-between p-3 rounded-md transition-colors cursor-pointer ${
              selectedModels.includes(model.id) 
                ? 'bg-primary/10 border border-primary/30' 
                : 'bg-muted hover:bg-muted/70 border border-transparent'
            }`}
            onClick={() => toggleModel(model.id)}
          >
            <div className="flex flex-col">
              <span className="font-medium">{model.name}</span>
              <span className="text-xs text-muted-foreground">{model.description}</span>
              <span className="text-xs mt-1 inline-flex items-center">
                <span className="px-2 py-0.5 bg-muted rounded text-muted-foreground">
                  {model.apiProvider}
                </span>
              </span>
            </div>
            
            {selectedModels.includes(model.id) ? (
              <CheckCircle className="h-5 w-5 text-primary" />
            ) : (
              <Circle className="h-5 w-5 text-muted-foreground" />
            )}
          </div>
        ))}
      </div>
      
      {selectedModels.length === 0 && (
        <p className="text-sm text-error mt-3">Please select at least one model</p>
      )}
    </div>
  );
};

export default ModelSelector;