import React from 'react';
import { BrainCircuit, Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <BrainCircuit className="h-6 w-6 text-primary" />
              <span className="ml-2 text-lg font-semibold text-foreground">AI Playground</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Compare responses from various AI models in one place. Explore, learn, and discover the nuances between different language models.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Resources</h3>
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Documentation
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                API Reference
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
          
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AI Playground. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;