import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
    setSent(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSent(false);

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/contact`, formData);
      setSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (error || sent) {
      const timer = setTimeout(() => {
        setError('');
        setSent(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, sent]);

  const isFormIncomplete = !formData.name || !formData.email || !formData.subject || !formData.message;

  return (
    <form onSubmit={handleSubmit} className="php-email-form">
      <div className="row gy-4">
        <div className="col-md-6">
          <label htmlFor="name-field" className="pb-2">Your Name</label>
          <input type="text" name="name" id="name-field" className="form-control" required value={formData.name} onChange={handleChange} />
        </div>

        <div className="col-md-6">
          <label htmlFor="email-field" className="pb-2">Your Email</label>
          <input type="email" name="email" id="email-field" className="form-control" required value={formData.email} onChange={handleChange} />
        </div>

        <div className="col-md-12">
          <label htmlFor="subject-field" className="pb-2">Subject</label>
          <input type="text" name="subject" id="subject-field" className="form-control" required value={formData.subject} onChange={handleChange} />
        </div>

        <div className="col-md-12">
          <label htmlFor="message-field" className="pb-2">Message</label>
          <textarea name="message" id="message-field" rows={4} className="form-control" required value={formData.message} onChange={handleChange}></textarea>
        </div>

        <div className="col-md-12 text-center">
          {loading && <div className="alert alert-info">Loading...</div>}
          {error && <div className="error-message">{error}</div>}
          {sent && <div className="sent-message">Your message has been sent. Thank you!</div>}
          <button type="submit" disabled={loading || isFormIncomplete}>Send Message</button>
        </div>
      </div>
    </form>
  );
}
