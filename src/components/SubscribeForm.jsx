import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SubscribeForm() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);
        setLoading(true);

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/subscribe`, { email });
            setMessage({ type: 'success', text: data.message });
            setEmail('');
        } catch (error) {
            if (error.code === 'ECONNABORTED') {
                setMessage({ type: 'error', text: 'The request timed out. Please try again in a few seconds.' });
            } else {
                const errorText = error.response?.data?.message?.email?.[0] || 'Subscription failed.';
                setMessage({ type: 'error', text: errorText });
            }
        }finally {
      setLoading(false);
    }

    };

    // Auto-dismiss message after 5 seconds
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setMessage(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <section className="subscriber_form" style={{ backgroundColor: 'rgb(224, 231, 238)' }}>
            <div className="container-fluid">
                <div className="newsletter-form py-5">
                    <form onSubmit={handleSubmit} className="row justify-content-center text-center g-3">
                        <div className="col-auto">
                            <label htmlFor="subscriber-email" className="form-control-plaintext fw-bold">
                                Stay Updated!
                            </label>
                        </div>

                        <div className="col-md-6 col-sm-10">
                            <input
                                id="subscriber-email"
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                autoComplete="email"
                            />
                            <p className="text-start text-muted form-text my-2">
                                Subscribe to our newsletter and receive the latest news about our products and services!
                            </p>
                        </div>

                        <div className="col-auto">
                            <button type="submit" className="subscribe_btn btn btn-primary" disabled={loading}>
                                {loading ? (
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                ) : (
                                    'Subscribe'
                                )}
                            </button>
                        </div>

                        {message && (
                            <div className="col-md-6 col-sm-10">
                                <div
                                    className={`alert mt-2 text-center ${message.type === 'success' ? 'alert-success' : 'alert-danger'}`}
                                    role="alert"
                                >
                                    {message.text}
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
