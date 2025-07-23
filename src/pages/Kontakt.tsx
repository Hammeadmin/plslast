import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle } from 'lucide-react';

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{success: boolean; message: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);
    
    // Simulate API call
    try {
          const response = await fetch('/.netlify/functions/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        emailType: 'contactForm',
        payload: {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.details || 'Failed to send message.');
    }

    toast.success('Tack för ditt meddelande! Vi återkommer så snart som möjligt.')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setSubmitResult({
        success: false,
        message: 'Det uppstod ett fel när meddelandet skulle skickas. Försök igen senare.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Kontakta oss
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Har du frågor eller funderingar? Vi finns här för att hjälpa dig.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kontaktuppgifter</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Telefon</h3>
                    <p className="mt-1 text-gray-600">+46 (0)8-123 45 67</p>
                    <p className="text-sm text-gray-500">Mån-Fre 9:00-17:00</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">E-post</h3>
                    <p className="mt-1 text-gray-600">support@farmispoolen.se</p>
                    <p className="text-sm text-gray-500">Vi svarar så snabbt vi kan</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Kontor</h3>
                    <p className="mt-1 text-gray-600">Drottninggatan 123</p>
                    <p className="text-gray-600">111 23 Stockholm</p>
                    <p className="text-sm text-gray-500">Endast efter överenskommelse</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Öppettider</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Måndag - Fredag:</span>
                    <span>9:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Lördag:</span>
                    <span>Stängt</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Söndag:</span>
                    <span>Stängt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Skicka meddelande</h2>
            
            {submitResult && (
              <div className={`mb-6 p-4 rounded-md ${submitResult.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertCircle className={`h-5 w-5 ${submitResult.success ? 'text-green-600' : 'text-red-600'}`} />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">{submitResult.message}</p>
                  </div>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Namn
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-post
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Meddelande
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Skickar...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Skicka meddelande
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}