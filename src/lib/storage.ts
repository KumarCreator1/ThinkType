export interface Session {
  id: string;
  timestamp: number;
  durationSeconds: number;
  wpm: number;
  accuracy: number;
  mistakes: number;
}

export interface UserSettings {
  theme: 'dark' | 'light';
  font: 'mono' | 'sans' | 'serif';
}

const STORAGE_KEYS = {
  SESSIONS: 'thinktype_sessions',
  SETTINGS: 'thinktype_settings',
};

export const storage = {
  saveSession: (session: Session) => {
    const sessions = storage.getSessions();
    sessions.unshift(session); // Add to beginning
    localStorage.setItem(STORAGE_KEYS.SESSIONS, JSON.stringify(sessions));
  },

  getSessions: (): Session[] => {
    const data = localStorage.getItem(STORAGE_KEYS.SESSIONS);
    return data ? JSON.parse(data) : [];
  },

  saveSettings: (settings: UserSettings) => {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  },

  getSettings: (): UserSettings => {
    const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    return data ? JSON.parse(data) : { theme: 'dark', font: 'mono' };
  }
};
