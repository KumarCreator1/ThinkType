import React, { useState } from 'react';
import { useUserStore } from '../../store/userStore';
import { ResultScreen } from '../core/ResultScreen';
import { Trash2 } from 'lucide-react';
import { type Session } from '../../lib/storage';

export const Dashboard: React.FC = () => {
  const { sessions, clearSessions } = useUserStore();
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-neutral-200">Session History</h2>
        {sessions.length > 0 && (
          <button
            onClick={clearSessions}
            className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors text-sm font-medium"
          >
            <Trash2 size={16} />
            Clear History
          </button>
        )}
      </div>
      
      {sessions.length === 0 ? (
        <div className="text-center text-neutral-500 py-12">
          No sessions yet. Start typing!
        </div>
      ) : (
        <div className="grid gap-4">
          {sessions.map((session) => (
            <div 
              key={session.id} 
              onClick={() => setSelectedSession(session)}
              className="bg-neutral-800/50 p-4 rounded-lg border border-neutral-700 flex justify-between items-center cursor-pointer hover:bg-neutral-800 transition-colors"
            >
              <div>
                <div className="text-lg font-bold text-neutral-200">
                  {new Date(session.timestamp).toLocaleDateString()} 
                  <span className="text-neutral-500 text-sm ml-2">
                    {new Date(session.timestamp).toLocaleTimeString()}
                  </span>
                </div>
                <div className="text-sm text-neutral-400 mt-1">
                  Duration: {session.durationSeconds}s
                </div>
              </div>
              
              <div className="flex gap-6 text-right">
                <div>
                  <div className="text-xs uppercase text-neutral-500">WPM</div>
                  <div className="text-xl font-bold text-emerald-400">{session.wpm}</div>
                </div>
                <div>
                  <div className="text-xs uppercase text-neutral-500">ACC</div>
                  <div className="text-xl font-bold text-blue-400">{session.accuracy}%</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedSession && (
        <ResultScreen
          wpm={selectedSession.wpm}
          accuracy={selectedSession.accuracy}
          time={selectedSession.durationSeconds}
          mistakes={selectedSession.mistakes}
          wpmHistory={[]} // We might not have history saved for old sessions, or need to add it to Session interface
          onRestart={() => setSelectedSession(null)}
          onDashboard={() => setSelectedSession(null)}
          isHistoryView={true}
        />
      )}
    </div>
  );
};
