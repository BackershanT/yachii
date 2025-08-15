import { useState, useEffect } from "react";
import axios from "axios";
import "./SubscribeForm.css";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/subscribe`,
        { email }
      );
      setMessage({ type: "success", text: data.message });
      setEmail("");
    } catch (error) {
      if (error.code === "ECONNABORTED") {
        setMessage({
          type: "error",
          text: "The request timed out. Please try again shortly.",
        });
      } else {
        const errorText =
          error.response?.data?.message?.email?.[0] ||
          "Subscription failed. Please try again.";
        setMessage({ type: "error", text: errorText });
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <section className="subscribe-section">
      <div className="subscribe-container">
        <h2 className="subscribe-title">Stay Updated 🚀</h2>
        <p className="subscribe-subtitle">Subscribe to our newsletter for the latest updates.</p>

        <form onSubmit={handleSubmit} className="subscribe-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            className="subscribe-input"
          />

          <button
            type="submit"
            className="subscribe-button"
            disabled={loading}
          >
            {loading ? <span className="loader"></span> : "Subscribe"}
          </button>
        </form>

        {message && (
          <div
            className={`subscribe-alert ${
              message.type === "success"
                ? "subscribe-alert-success"
                : "subscribe-alert-error"
            }`}
          >
            {message.text}
          </div>
        )}
      </div>
    </section>
  );
}
