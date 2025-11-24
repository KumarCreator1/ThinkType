import { create } from 'zustand';
import { storage, type Session, type UserSettings } from '../lib/storage';

interface UserState {
  sessions: Session[];
  settings: UserSettings;
  addSession: (session: Session) => void;
  updateSettings: (settings: Partial<UserSettings>) => void;
  clearSessions: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  sessions: storage.getSessions(),
  settings: storage.getSettings(),

  addSession: (session) => {
    storage.saveSession(session);
    set((state) => ({ sessions: [session, ...state.sessions] }));
  },

  updateSettings: (newSettings) => {
    set((state) => {
      const updated = { ...state.settings, ...newSettings };
      storage.saveSettings(updated);
      return { settings: updated };
    });
  },

  clearSessions: () => {
    storage.clearSessions();
    set({ sessions: [] });
  },
}));
