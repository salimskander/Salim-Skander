'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formState.name) {
      setError('Le nom est obligatoire');
      return;
    }
    
    if (!formState.email && !formState.phone) {
      setError('Veuillez fournir au moins un email ou un numéro de téléphone');
      return;
    }
    
    if (!formState.message) {
      setError('Le message est obligatoire');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Une erreur est survenue');
      }
      
      setIsSubmitted(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
      
      // Reset après 3 secondes
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen py-32 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Me Contacter
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">Parlons de votre projet</h2>
            <p className="text-foreground/80 mb-8">
              Vous avez un projet en tête ou une opportunité à discuter ? Je serais ravi d&apos;échanger avec vous pour voir comment je peux vous aider.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Téléphone</h3>
                  <p className="text-foreground/70">+33 6 29 16 86 39</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-foreground/70">sm.infomail17@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Localisation</h3>
                  <p className="text-foreground/70">Bordeaux, France</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-foreground/5 p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">Envoyez-moi un message</h2>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-green-500/10 text-green-500 p-4 rounded-lg text-center"
              >
                <p className="font-medium">Message envoyé avec succès !</p>
                <p className="text-sm mt-1">Je vous répondrai dans les plus brefs délais.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="bg-red-500/10 text-red-500 p-4 rounded-lg">
                    <p>{error}</p>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium mb-1">Nom <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-foreground/30"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium mb-1">Email <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-foreground/30"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium mb-1">Téléphone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-foreground/30"
                    />
                  </div>
                </div>
                
                <div className="mt-3">
                  <label htmlFor="message" className="block text-xs font-medium mb-1">Message <span className="text-red-500">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-foreground/30"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-foreground text-background py-3 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-70 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : 'Envoyer le message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
} 