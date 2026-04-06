import { Warning, ArrowsClockwise, House } from '@phosphor-icons/react';

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
    <div className="min-h-[400px] flex items-center justify-center p-4 bg-retro-bg">
      <div className="retro-card bg-retro-white max-w-md w-full p-8">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 border-4 border-retro-ink shadow-retro-md flex items-center justify-center bg-retro-accent">
            <Warning className="w-10 h-10 text-retro-white" weight="bold" />
          </div>
        </div>

        <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-retro-ink text-center mb-4">
          SOMETHING WENT WRONG
        </h2>

        <p className="text-center mb-6 font-medium text-retro-ink/80">
          AN UNEXPECTED ERROR OCCURRED. WE'VE LOGGED THE ISSUE.
        </p>

        {isDevelopment && error && (
          <div className="mb-6 p-4 border-4 border-retro-ink shadow-retro-sm bg-retro-accent/20">
            <p className="font-mono text-xs break-all text-retro-ink">
              {error.message}
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleReload}
            className="retro-btn retro-btn-primary flex-1 inline-flex items-center justify-center gap-2"
          >
            <ArrowsClockwise className="w-5 h-5" weight="bold" />
            TRY AGAIN
          </button>

          <button
            onClick={handleGoHome}
            className="retro-btn retro-btn-outline flex-1 inline-flex items-center justify-center gap-2"
          >
            <House className="w-5 h-5" weight="bold" />
            GO HOME
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorFallback;
