import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { LayoutDashboard, Keyboard, User, Info, MessageSquare, LifeBuoy, Home, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'typing' | 'dashboard' | 'profile' | 'about' | 'feedback';
  setView: (view: 'home' | 'typing' | 'dashboard' | 'profile' | 'about' | 'feedback') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'typing', label: 'Practice', icon: Keyboard },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'about', label: 'About Us', icon: Info },
  ];

  const isLightPage = currentView === 'home' || currentView === 'about' || currentView === 'feedback';

  const handleNavClick = (view: any) => {
    setView(view);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`w-full backdrop-blur-md border-b py-4 px-4 md:px-8 flex justify-between items-center sticky top-0 z-50 transition-colors duration-300 ${
      isLightPage 
        ? 'bg-white/80 border-neutral-200/50' 
        : 'bg-neutral-900/50 border-white/5'
    }`}>
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer z-50" onClick={() => handleNavClick('home')}>
        <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg flex items-center justify-center">
          <span className="font-bold text-neutral-900 text-lg">T</span>
        </div>
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500">
          ThinkingMode
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
              currentView === item.id
                ? 'text-emerald-400'
                : isLightPage 
                  ? 'text-neutral-600 hover:text-neutral-900'
                  : 'text-neutral-400 hover:text-white'
            }`}
          >
            <item.icon size={18} />
            {item.label}
          </button>
        ))}
      </div>

      {/* Desktop Actions */}
      <div className="hidden md:flex items-center gap-6">
        <button 
          onClick={() => handleNavClick('feedback')}
          className={`flex items-center gap-2 text-sm font-medium ${
            currentView === 'feedback'
              ? 'text-emerald-400'
              : isLightPage ? 'text-neutral-600 hover:text-neutral-900' : 'text-neutral-400 hover:text-white'
          } transition-colors`} 
          title="Feedback"
        >
          <MessageSquare size={18} />
          Feedback
        </button>
        <button className={`flex items-center gap-2 text-sm font-medium ${isLightPage ? 'text-neutral-600 hover:text-neutral-900' : 'text-neutral-400 hover:text-white'} transition-colors`} title="Support">
          <LifeBuoy size={18} />
          Support
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden z-50 text-neutral-400 hover:text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} className={isLightPage ? 'text-neutral-900' : 'text-white'} />}
      </button>



      {/* Mobile Menu Overlay */}
      {isMenuOpen && createPortal(
        <div className="fixed inset-0 bg-black/95 z-[100] flex flex-col items-center justify-center gap-8 md:hidden animate-fade-in">
          <button 
            className="absolute top-6 right-6 text-neutral-400 hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={24} />
          </button>

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`flex items-center gap-4 text-2xl font-bold transition-colors ${
                currentView === item.id ? 'text-emerald-400' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <item.icon size={28} />
              {item.label}
            </button>
          ))}
          
          <div className="w-24 h-px bg-white/10 my-4" />
          
          <button 
            onClick={() => handleNavClick('feedback')}
            className={`flex items-center gap-4 text-xl font-medium ${
              currentView === 'feedback' ? 'text-emerald-400' : 'text-neutral-400 hover:text-white'
            }`}
          >
            <MessageSquare size={24} />
            Feedback
          </button>
          <button className="flex items-center gap-4 text-xl text-neutral-400 hover:text-white font-medium">
            <LifeBuoy size={24} />
            Support
          </button>
        </div>,
        document.body
      )}
    </nav>
  );
};
