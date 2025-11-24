import React from 'react';
import { useUserStore } from '../../store/userStore';

export const Dashboard: React.FC = () => {
  const { sessions } = useUserStore();

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-neutral-200 mb-6">Session History</h2>
      
      {sessions.length === 0 ? (
        <div className="text-center text-neutral-500 py-12">
          No sessions yet. Start typing!
        </div>
      ) : (
        <div className="grid gap-4">
          {sessions.map((session) => (
            <div 
              key={session.id} 
              className="bg-neutral-800/50 p-4 rounded-lg border border-neutral-700 flex justify-between items-center"
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
    </div>
  );
};
