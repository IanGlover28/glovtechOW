// components/ContactForm.tsx
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [contact, setContact] = useState({ name: '', email: '', message: '' });
  const [subEmail, setSubEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(contact),
    });

    const data = await res.json();
    setStatus(data.message);
  };

  const handleSubscribe = async () => {
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email: subEmail }),
    });

    const data = await res.json();
    setStatus(data.message);
  };

  return (
    <div className="p-6 space-y-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold">Contact Glovtech</h2>
      <form onSubmit={handleContactSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border rounded"
          value={contact.name}
          onChange={(e) => setContact({ ...contact, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={contact.email}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
          required
        />
        <textarea
          placeholder="Message"
          className="w-full p-2 border rounded"
          value={contact.message}
          onChange={(e) => setContact({ ...contact, message: e.target.value })}
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>

      <h3 className="text-xl font-semibold">Subscribe to our newsletter</h3>
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="Your email"
          className="flex-grow p-2 border rounded"
          value={subEmail}
          onChange={(e) => setSubEmail(e.target.value)}
        />
        <button
          type="button"
          onClick={handleSubscribe}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Subscribe
        </button>
      </div>

      {status && <p className="text-sm text-green-600">{status}</p>}
    </div>
  );
}
