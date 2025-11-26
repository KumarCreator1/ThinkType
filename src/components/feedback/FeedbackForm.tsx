import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Star } from 'lucide-react';

interface FeedbackFormProps {
  scriptUrl: string;
}

export const FeedbackForm: React.FC<FeedbackFormProps> = ({ scriptUrl }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'General Feedback',
    rating: 0,
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const feedbackTypes = [
    'Bug Report',
    'Feature Request',
    'Suggestion',
    'General Feedback'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Get current page and browser info
      const page = window.location.pathname;
      const browser = navigator.userAgent;

      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          page,
          browser
        })
      });

      // Note: With no-cors, we can't read the response, so we assume success
      setStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        type: 'General Feedback',
        rating: 0,
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
      
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send feedback. Please try again.');
      console.error('Feedback submission error:', error);
    }
  };

  const StarRating = () => (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => setFormData({ ...formData, rating: star })}
          className="transition-all hover:scale-110"
        >
          <Star
            size={28}
            className={star <= formData.rating ? 'fill-amber-400 text-amber-400' : 'text-neutral-300'}
          />
        </button>
      ))}
    </div>
  );

  if (status === 'success') {
    return (
      <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-200 text-center">
        <CheckCircle className="text-emerald-600 mx-auto mb-4" size={48} />
        <h3 className="text-2xl font-bold text-neutral-900 mb-2">Thank You!</h3>
        <p className="text-neutral-700 text-lg">
          Your feedback has been received. We truly appreciate you taking the time to help us improve ThinkingMode!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-blue-200 shadow-lg">
      <div className="text-center mb-6">
        <h3 className="text-3xl font-serif text-neutral-900 mb-2">We'd Love Your Feedback</h3>
        <p className="text-neutral-600">Help us make ThinkingMode even better</p>
      </div>

      <div className="space-y-5">
        {/* Name field */}
        <div>
          <label className="block text-sm font-semibold text-neutral-700 mb-2">
            Name <span className="text-neutral-400 font-normal">(optional)</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-neutral-900"
            placeholder="Your name"
          />
        </div>

        {/* Email field */}
        <div>
          <label className="block text-sm font-semibold text-neutral-700 mb-2">
            Email <span className="text-neutral-400 font-normal">(optional)</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-neutral-900"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Feedback type */}
        <div>
          <label className="block text-sm font-semibold text-neutral-700 mb-2">
            Feedback Type
          </label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-neutral-900 bg-white"
          >
            {feedbackTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Star rating */}
        <div>
          <label className="block text-sm font-semibold text-neutral-700 mb-2">
            How would you rate ThinkingMode? <span className="text-red-500">*</span>
          </label>
          <StarRating />
          {formData.rating === 0 && (
            <p className="text-sm text-neutral-500 mt-1">Please select a rating</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-neutral-700 mb-2">
            Your Feedback <span className="text-red-500">*</span>
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-neutral-900 resize-none"
            placeholder="Tell us what's on your mind..."
          />
        </div>

        {/* Error message */}
        {status === 'error' && (
          <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
            <AlertCircle size={20} />
            <p className="text-sm">{errorMessage}</p>
          </div>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={status === 'loading' || !formData.message || formData.rating === 0}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-neutral-400 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={20} />
              Send Feedback
            </>
          )}
        </button>
      </div>

      <p className="text-center text-sm text-neutral-500 mt-4">
        Your feedback helps us improve. Thank you!
      </p>
    </form>
  );
};
