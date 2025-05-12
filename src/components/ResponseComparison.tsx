import React, { useEffect, useRef } from 'react';
import { Clock, Copy, Check } from 'lucide-react';
import { usePlayground, AIResponse, AIModel } from '../context/PlaygroundContext';

const ResponseComparison: React.FC = () => {
  const { responses, availableModels } = usePlayground();
  const responseRefs = useRef<HTMLDivElement[]>([]);
  
  // State for copy button
  const [copied, setCopied] = React.useState<string | null>(null);
  
  // Reset scroll position when new responses come in
  useEffect(() => {
    responseRefs.current.forEach(ref => {
      if (ref) {
        ref.scrollTop = 0;
      }
    });
  }, [responses]);
  
  const handleCopy = (text: string, modelId: string) => {
    navigator.clipboard.writeText(text);
    setCopied(modelId);
    setTimeout(() => setCopied(null), 2000);
  };
  
  // Format date
  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  // Get model info
  const getModelInfo = (modelId: string): AIModel | undefined => {
    return availableModels.find(model => model.id === modelId);
  };
  
  if (responses.length === 0) {
    return null;
  }
  
  return (
    <div className="mt-8 space-y-6 animate-fade-in">
      <h2 className="text-xl font-semibold">Response Comparison</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {responses.map((response, index) => {
          const model = getModelInfo(response.modelId);
          
          return (
            <div 
              key={response.modelId}
              className="bg-card border border-border rounded-lg shadow-card overflow-hidden transition-all hover:shadow-card-hover"
            >
              <div className="bg-muted p-4 border-b border-border flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{model?.name || response.modelId}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs px-2 py-0.5 bg-muted rounded text-muted-foreground">
                      {model?.apiProvider}
                    </span>
                    <span className="text-xs flex items-center text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {formatTime(response.timestamp)}
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={() => handleCopy(response.text, response.modelId)}
                  className="p-1.5 rounded-md hover:bg-muted/50 transition-colors"
                  aria-label="Copy response"
                >
                  {copied === response.modelId ? (
                    <Check className="h-4 w-4 text-success" />
                  ) : (
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  )}
                </button>
              </div>
              
              <div 
                ref={el => {
                  if (el) responseRefs.current[index] = el;
                }}
                className="p-4 h-64 overflow-y-auto"
              >
                <p className="whitespace-pre-line">{response.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResponseComparison;