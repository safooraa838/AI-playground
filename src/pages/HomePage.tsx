import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, ArrowRight, Zap, Database, Shield, Layers } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <BrainCircuit className="h-16 w-16 text-primary animate-pulse-slow" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
              Compare AI Responses
              <span className="text-primary"> Side by Side</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animation-delay-200 animate-slide-up">
              Explore and compare responses from multiple AI models in a single interface. 
              Discover the nuances between different language models and find the perfect one for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animation-delay-400 animate-slide-up">
              <Link 
                to="/playground" 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center"
              >
                Try the Playground <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                to="/signup" 
                className="px-6 py-3 bg-muted border border-border rounded-lg hover:bg-muted/70 transition-colors"
              >
                Create an Account
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why Use AI Playground?</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Our platform provides unique features designed to help you get the most out of AI language models.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all">
              <div className="bg-primary/10 p-3 rounded-full inline-block mb-4">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Side-by-Side Comparison</h3>
              <p className="text-muted-foreground">
                Compare responses from different AI models simultaneously and identify subtle differences in reasoning, style, and knowledge.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all">
              <div className="bg-primary/10 p-3 rounded-full inline-block mb-4">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">History Tracking</h3>
              <p className="text-muted-foreground">
                Save and revisit your past AI interactions. Organize by categories and build a repository of valuable AI-generated content.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all">
              <div className="bg-primary/10 p-3 rounded-full inline-block mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multiple AI Models</h3>
              <p className="text-muted-foreground">
                Access numerous AI models through a single interface without juggling multiple services or subscriptions.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all">
              <div className="bg-primary/10 p-3 rounded-full inline-block mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure and Private</h3>
              <p className="text-muted-foreground">
                Your prompts and AI interactions are kept secure. We prioritize your privacy and data security.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all">
              <div className="bg-primary/10 p-3 rounded-full inline-block mb-4">
                <BrainCircuit className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Categorized Content</h3>
              <p className="text-muted-foreground">
                Filter AI responses by category to quickly find the type of content you're looking for.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all">
              <div className="bg-primary/10 p-3 rounded-full inline-block mb-4">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-muted-foreground">
                Intuitive interface designed for both beginners and advanced users to get the most out of AI language models.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto bg-card border border-border rounded-2xl p-8 md:p-12 shadow-card overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to explore AI responses?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Join thousands of users who are discovering the nuances between different AI models. Sign up today and start comparing AI responses side by side.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/playground" 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center"
              >
                Try the Playground <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                to="/signup" 
                className="px-6 py-3 bg-muted border border-border rounded-lg hover:bg-muted/70 transition-colors"
              >
                Create an Account
              </Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;