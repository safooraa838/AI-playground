import React, { createContext, useContext, useState } from 'react';

export interface AIModel {
  id: string;
  name: string;
  description: string;
  apiProvider: string;
}

export interface AIResponse {
  modelId: string;
  text: string;
  timestamp: number;
}

export interface QueryHistory {
  id: string;
  prompt: string;
  responses: AIResponse[];
  timestamp: number;
  category?: string;
}

interface PlaygroundContextType {
  prompt: string;
  setPrompt: (prompt: string) => void;
  selectedModels: string[];
  toggleModel: (modelId: string) => void;
  availableModels: AIModel[];
  isGenerating: boolean;
  generateResponses: () => Promise<void>;
  responses: AIResponse[];
  history: QueryHistory[];
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  categories: string[];
}

const PlaygroundContext = createContext<PlaygroundContextType | undefined>(undefined);

// Mock available models
const mockModels: AIModel[] = [
  {
    id: 'gpt-4',
    name: 'GPT-4',
    description: 'OpenAI\'s most capable model',
    apiProvider: 'OpenAI',
  },
  {
    id: 'gpt-3.5-turbo',
    name: 'GPT-3.5 Turbo',
    description: 'Efficient and fast responses',
    apiProvider: 'OpenAI',
  },
  {
    id: 'claude-3',
    name: 'Claude 3',
    description: 'Anthropic\'s latest model',
    apiProvider: 'Anthropic',
  },
  {
    id: 'llama-2',
    name: 'Llama 2',
    description: 'Meta\'s open source model',
    apiProvider: 'Meta',
  },
];

// Mock categories
const mockCategories = [
  'General',
  'Creative',
  'Technical',
  'Business',
  'Academic',
];

export function PlaygroundProvider({ children }: { children: React.ReactNode }) {
  const [prompt, setPrompt] = useState('');
  const [selectedModels, setSelectedModels] = useState(['gpt-4', 'gpt-3.5-turbo']);
  const [isGenerating, setIsGenerating] = useState(false);
  const [responses, setResponses] = useState<AIResponse[]>([]);
  const [history, setHistory] = useState<QueryHistory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Toggle model selection
  const toggleModel = (modelId: string) => {
    setSelectedModels(prev => {
      if (prev.includes(modelId)) {
        return prev.filter(id => id !== modelId);
      } else {
        return [...prev, modelId];
      }
    });
  };

  // Mock function to generate responses
  const generateResponses = async () => {
    if (!prompt.trim() || selectedModels.length === 0) return;
    
    setIsGenerating(true);
    
    try {
      // Simulate API calls
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Generate mock responses
      const newResponses = selectedModels.map(modelId => {
        const model = mockModels.find(m => m.id === modelId);
        return {
          modelId,
          text: `This is a simulated response from ${model?.name || modelId} to the prompt: "${prompt}". In a real implementation, this would be an actual API response.`,
          timestamp: Date.now(),
        };
      });
      
      setResponses(newResponses);
      
      // Add to history
      const historyItem: QueryHistory = {
        id: Date.now().toString(),
        prompt,
        responses: newResponses,
        timestamp: Date.now(),
        category: selectedCategory || 'General',
      };
      
      setHistory(prev => [historyItem, ...prev]);
      
    } catch (error) {
      console.error('Error generating responses:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <PlaygroundContext.Provider
      value={{
        prompt,
        setPrompt,
        selectedModels,
        toggleModel,
        availableModels: mockModels,
        isGenerating,
        generateResponses,
        responses,
        history,
        selectedCategory,
        setSelectedCategory,
        categories: mockCategories,
      }}
    >
      {children}
    </PlaygroundContext.Provider>
  );
}

export function usePlayground() {
  const context = useContext(PlaygroundContext);
  if (context === undefined) {
    throw new Error('usePlayground must be used within a PlaygroundProvider');
  }
  return context;
}