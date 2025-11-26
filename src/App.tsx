import { useState } from 'react';
import { TypingEngine } from './components/core/TypingEngine';
import { Dashboard } from './components/dashboard/Dashboard';
import { Navbar } from './components/layout/Navbar';
import { LandingPage } from './components/pages/LandingPage';
import { AboutPage } from './components/pages/AboutPage';
import { FeedbackPage } from './components/pages/FeedbackPage';

function App() {
  const [view, setView] = useState<'home' | 'typing' | 'dashboard' | 'profile' | 'about' | 'feedback'>('home');

  const renderContent = () => {
    switch (view) {
      case 'home':
        return <LandingPage onStart={() => setView('typing')} />;
      case 'typing':
        return <TypingEngine onShowDashboard={() => setView('dashboard')} />;
      case 'dashboard':
        return <Dashboard />;
      case 'about':
        return <AboutPage />;
      case 'feedback':
        return <FeedbackPage />;
      case 'profile':
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-neutral-400">This feature is under development.</p>
          </div>
        );
      default:
        return <LandingPage onStart={() => setView('typing')} />;
    }
  };

  const getBackgroundClass = () => {
    if (view === 'home' || view === 'about' || view === 'feedback') {
      return 'bg-gradient-to-b from-neutral-100 via-neutral-200 to-neutral-300';
    }
    return 'bg-[#111]';
  };

  return (
    <div className={`min-h-screen ${getBackgroundClass()} text-gray-100 flex flex-col font-sans selection:bg-emerald-500/30 transition-colors duration-500`}>
      <Navbar currentView={view as any} setView={setView as any} />
      
      <main className="flex-1 w-full max-w-full mx-auto p-4 md:p-8">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
