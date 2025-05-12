import React from 'react';
import { Clock } from 'lucide-react';
import CategoryFilter from '../components/CategoryFilter';
import HistoryList from '../components/HistoryList';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const HistoryPage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return (
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold mb-6">History</h1>
        <div className="bg-card border border-border rounded-lg p-8 max-w-md mx-auto">
          <p className="text-lg mb-4">
            Please log in to view your history
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-muted border border-border rounded-md hover:bg-muted/70 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="flex items-center space-x-2 mb-8">
        <Clock className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Query History</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <CategoryFilter />
        </div>
        
        <div className="lg:col-span-3">
          <HistoryList />
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;