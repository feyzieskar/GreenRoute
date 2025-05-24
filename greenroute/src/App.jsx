import { useState } from 'react';
import './index.css';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="container">
      <header className="navbar">
        <h1 className="logo">GreenRoute</h1>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
          <button onClick={() => setShowLogin(true)} className="login-button">Login</button>
        </nav>
      </header>

      {!showLogin && (
        <>
          <section className="hero">
            <h2>Smart Routes. Greener Business.</h2>
            <p>
              Optimize your deliveries, reduce costs, and track your carbon footprint — all in one platform built for SMEs.
            </p>
            <a href="/signup" className="cta-button">Start Free Trial</a>
          </section>

          <section className="features" id="features">
            <h3>Why Choose GreenRoute?</h3>
            <div className="feature-grid">
              <div className="feature-box">
                <h4>Smart Route Optimization</h4>
                <p>Get the most efficient delivery routes using real-time data.</p>
              </div>
              <div className="feature-box">
                <h4>Carbon Tracking</h4>
                <p>Track emissions and generate sustainability reports.</p>
              </div>
              <div className="feature-box">
                <h4>No Tech Skills Needed</h4>
                <p>Use a simple dashboard to upload deliveries and get instant results.</p>
              </div>
            </div>
          </section>

          <section className="pricing" id="pricing">
            <h3>Pricing Plans</h3>
            <div className="pricing-grid">
              <div className="pricing-card">
                <h4>Basic</h4>
                <p className="price">249₺ / month</p>
                <ul>
                  <li>Up to 100 deliveries</li>
                  <li>Email support</li>
                  <li>Access to dashboard</li>
                </ul>
              </div>
              <div className="pricing-card featured">
                <h4>Pro</h4>
                <p className="price">599₺ / month</p>
                <ul>
                  <li>Up to 500 deliveries</li>
                  <li>Priority support</li>
                  <li>Carbon tracking</li>
                </ul>
              </div>
              <div className="pricing-card">
                <h4>Enterprise</h4>
                <p className="price">Contact us</p>
                <ul>
                  <li>Unlimited deliveries</li>
                  <li>Dedicated account manager</li>
                  <li>Custom integrations</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="contact" id="contact">
            <h3>Contact Us</h3>
            <form className="contact-form" action="https://formspree.io/f/mwpodkza" method="POST">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </section>
        </>
      )}

      {showLogin && (
        <section className="auth" id="login">
          <h3>Login to GreenRoute</h3>
          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>

          <p className="auth-divider">or</p>

          <h3>Create an Account</h3>
          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Register</button>
          </form>

          <button onClick={() => setShowLogin(false)} className="back-button">← Back to Home</button>
        </section>
      )}

      <footer className="footer">
        &copy; 2025 GreenRoute. All rights reserved.
      </footer>
    </div>
  );
}

export default App;