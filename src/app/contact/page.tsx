'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        // Réinitialiser le formulaire
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Une erreur est survenue');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Erreur de connexion. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return(
    <div className="min-h-screen bg-[#000814] text-white">
      
      <div className="pt-32 pb-16">
        <h1 className="text-[#FFC300] text-4xl font-bold text-center mb-16">Me contacter</h1>
        
        {/* Informations de contact */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 text-[#FFC300]">
            <div className="text-white mb-4">
              Email : damien.drozd@icloud.com 
            </div>
            <div className="text-white mb-4">
              Téléphone : 07 87 27 71 92
            </div>
            <div className="flex space-x-4">
              <a 
                className="text-[#FFC300] hover:text-[#FFD700] transition-colors" 
                href="https://www.linkedin.com/in/damiendrozd/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a 
                className="text-[#FFC300] hover:text-[#FFD700] transition-colors" 
                href="https://github.com/DamienDrozd" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Messages de statut */}
        {submitStatus === 'success' && (
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-green-900 border border-green-500 text-green-100 px-4 py-3 rounded-lg">
              ✅ Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-red-900 border border-red-500 text-red-100 px-4 py-3 rounded-lg">
              ❌ {errorMessage}
            </div>
          </div>
        )}

        {/* Formulaire de contact */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8">
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#FFC300] font-medium mb-2">
                  Nom *
                </label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full px-4 py-3 bg-[#000814] border border-[#FFC300] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC300] focus:border-transparent" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-[#FFC300] font-medium mb-2">
                  Adresse Email *
                </label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-3 bg-[#000814] border border-[#FFC300] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC300] focus:border-transparent" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[#FFC300] font-medium mb-2">
                  Message *
                </label>
                <textarea 
                  id="message"
                  rows={5} 
                  className="w-full px-4 py-3 bg-[#000814] border border-[#FFC300] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC300] focus:border-transparent resize-none" 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                  required
                  disabled={isSubmitting}
                  placeholder="Votre message..."
                />
              </div>
              
              <button 
                type="submit" 
                className={`w-full font-bold py-3 px-6 rounded-lg transition-colors ${
                  isSubmitting 
                    ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                    : 'bg-[#FFC300] text-[#000814] hover:bg-[#FFD700]'
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </span>
                ) : (
                  'Envoyer le message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
