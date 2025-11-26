import React from 'react';
import { FeedbackForm } from '../feedback/FeedbackForm';

export const FeedbackPage: React.FC = () => {
  return (
    <div className="w-full min-h-[calc(100vh-200px)] flex items-center justify-center">
      {/* Background with gradient */}
      <div className="bg-gradient-to-b from-blue-50 via-white to-blue-50 w-full py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-black text-neutral-900 mb-4">
              Share Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Feedback</span>
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Your insights help us build a better typing experience. We read every submission!
            </p>
          </div>
          
          <FeedbackForm scriptUrl="https://script.google.com/macros/s/AKfycbzmjOp3HX3leLadlX6QJCnAAyLd-WXn9fpfLV-Nw8hspBuz6RSrhR31ArXw8A6mwIWA/exec" />
        </div>
      </div>
    </div>
  );
};
