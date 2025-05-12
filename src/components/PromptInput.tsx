import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { usePlayground } from '../context/PlaygroundContext';

const PromptInput: React.FC = () => {
  const { prompt, setPrompt, generateResponses, isGenerating, selectedModels } = usePlayground();
  const [charCount, setCharCount] = useState(0);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setPrompt(value);
    setCharCount(value.length);
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (prompt.trim() && selectedModels.length > 0) {
      generateResponses();
    }
  };
  
  return (
    <div className="mt-6">
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="relative">
          <textarea
            value={prompt}
            onChange={handleInputChange}
            placeholder="Enter your prompt here..."
            rows={4}
            className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary resize-none transition-all"
            disabled={isGenerating}
          />
          <div className="absolute bottom-3 right-3 text-xs text-muted-foreground">
            {charCount} characters
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            {selectedModels.length > 0 ? (
              <span>{selectedModels.length} model{selectedModels.length > 1 ? 's' : ''} selected</span>
            ) : (
              <span className="text-error">No models selected</span>
            )}
          </div>
          
          <button
            type="submit"
            disabled={isGenerating || !prompt.trim() || selectedModels.length === 0}
            className={`px-4 py-2 rounded-md text-primary-foreground flex items-center space-x-2 transition-colors
              ${isGenerating || !prompt.trim() || selectedModels.length === 0
                ? 'bg-primary/50 cursor-not-allowed'
                : 'bg-primary hover:bg-primary/90'
              }`}
          >
            {isGenerating ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Generating...</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span>Generate</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PromptInput;