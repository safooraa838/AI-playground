import React from 'react';
import ModelSelector from '../components/ModelSelector';
import PromptInput from '../components/PromptInput';
import ResponseComparison from '../components/ResponseComparison';
import CategoryFilter from '../components/CategoryFilter';

const PlaygroundPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold">AI Playground</h1>
        <p className="text-muted-foreground">
          Compare responses from different AI models side by side. Select models, enter your prompt, and see how each model responds.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <ModelSelector />
          <CategoryFilter />
        </div>
        
        <div className="lg:col-span-3">
          <PromptInput />
          <ResponseComparison />
        </div>
      </div>
    </div>
  );
};

export default PlaygroundPage;