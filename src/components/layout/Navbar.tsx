import React from 'react';
import { LayoutDashboard, Keyboard, User, Info, MessageSquare, LifeBuoy, Home } from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'typing' | 'dashboard' | 'profile' | 'about';
  setView: (view: 'home' | 'typing' | 'dashboard' | 'profile' | 'about') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'typing', label: 'Practice', icon: Keyboard },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'about', label: 'About Us', icon: Info },
  ];

  return (
    <nav className="w-full bg-neutral-900/50 backdrop-blur-md border-b border-white/5 py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}>
        <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg flex items-center justify-center">
          <span className="font-bold text-neutral-900 text-lg">T</span>
        </div>
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500">
          ThinkingMode
        </span>
      </div>

      <div className="flex items-center gap-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setView(item.id as any)}
            className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
              currentView === item.id
                ? 'text-emerald-400'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <item.icon size={18} />
            {item.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button className="text-neutral-400 hover:text-white transition-colors" title="Feedback">
          <MessageSquare size={20} />
        </button>
        <button className="text-neutral-400 hover:text-white transition-colors" title="Support">
          <LifeBuoy size={20} />
        </button>
      </div>
    </nav>
  );
};
