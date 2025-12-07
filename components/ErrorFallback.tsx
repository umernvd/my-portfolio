import { AlertCircle, RefreshCw, Home } from 'lucide-react';

interface ErrorFallbackProps {
  error: Error | null;
  resetError?: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetError }) => {
  const isDevelopment = import.meta.env.DEV;

  const handleReload = () => {
    if (resetError) {
      resetError();
    }
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-[400px] flex items-center justify-center p-4 bg-stone-50 dark:bg-[#1a2015]">
      <div className="max-w-md w-full bg-white dark:bg-[#252e1f] rounded-2xl shadow-xl p-8 border border-stone-200 dark:border-stone-800">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-stone-900 dark:text-beige text-center mb-4">
          Something Went Wrong
        </h2>
        
        <p className="text-stone-600 dark:text-stone-300 text-center mb-6">
          We encountered an unexpected error. Don't worry, we've logged the issue.
        </p>

        {isDevelopment && error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-200 dark:border-red-800">
            <p className="text-xs font-mono text-red-800 dark:text-red-300 break-all">
              {error.message}
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleReload}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary hover:bg-[#4a5e29] text-white font-medium rounded-lg transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          
          <button
            onClick={handleGoHome}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-stone-200 dark:bg-[#2f3a27] hover:bg-stone-300 dark:hover:bg-[#3a4430] text-stone-900 dark:text-stone-200 font-medium rounded-lg transition-colors"
          >
            <Home className="w-4 h-4" />
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorFallback;
