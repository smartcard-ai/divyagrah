import React, { useState } from 'react';
import './App.css';

const products = [
  {
    id: 1,
    name: "Classic Mysore Sandalwood Agarbatti",
    category: "Agarbatti Sticks",
    price: "₹150",
    image: "/assets/agarbatti.png",
    amazonUrl: "https://www.amazon.in/s?k=divyagrah+agarbatti",
    description: "Pure sandalwood fragrance for your daily pooja and meditation.",
    usage: ["Pooja", "Meditation"],
    color: "Brown"
  },
  {
    id: 2,
    name: "Traditional Temple Dhoop Cones",
    category: "Dhoop",
    price: "₹120",
    image: "/assets/dhoop.png",
    amazonUrl: "https://www.amazon.in/s?k=divyagrah+dhoop",
    description: "Long-lasting aromatic dhoop cones made with natural resins.",
    usage: ["Pooja", "Fragrance"],
    color: "Dark Brown"
  },
  {
    id: 3,
    name: "Premium Lavender Incense Sticks",
    category: "Incense Sticks",
    price: "₹180",
    image: "/assets/hero.png",
    amazonUrl: "https://www.amazon.in/s?k=divyagrah+incense+sticks",
    description: "Relaxing lavender scent to create a serene environment at home.",
    usage: ["Fragrance", "Meditation"],
    color: "Brown"
  },
  {
    id: 4,
    name: "Sacred Guggul Dhoop",
    category: "Dhoop",
    price: "₹140",
    image: "/assets/dhoop.png",
    amazonUrl: "https://www.amazon.in/s?k=divyagrah+dhoop",
    description: "Authentic Guggul dhoop for spiritual purification.",
    usage: ["Pooja"],
    color: "Natural Brown"
  }
];

function App() {
  const [filter, setFilter] = useState('All');

  const filteredProducts = filter === 'All'
    ? products
    : products.filter(p => p.category === filter);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="glass">
        <div className="container nav-content">
          <div className="logo-container">
            <img src="/assets/logo.jpg" alt="Divyagrah Logo" className="logo" />
            <div className="brand-name">
              <h1>दिव्यग्रह</h1>
              <p>DIVYAGRAH</p>
            </div>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">Our Story</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content fade-in">
          <span className="subtitle">हर सांस में शुद्धता, हर क्षण में दिव्यता</span>
          <h2>Bring Divinity to <br /><span>Your Sacred Space</span></h2>
          <p>Experience the purest fragrances crafted for your spiritual journey. Our products are designed to enhance your pooja and meditation experience.</p>
          <div className="hero-btns">
            <a href="#products" className="btn btn-primary">Shop Collection</a>
            <a href="#about" className="btn btn-outline">Learn More</a>
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="features container">
        <div className="feature-card">
          <div className="icon">🕉️</div>
          <h3>Spiritual Purity</h3>
          <p>Carefully selected natural ingredients for authentic rituals.</p>
        </div>
        <div className="feature-card">
          <div className="icon">🌿</div>
          <h3>Natural Fragrance</h3>
          <p>Pleasant and long-lasting scents that soothe the mind.</p>
        </div>
        <div className="feature-card">
          <div className="icon">🏠</div>
          <h3>Daily Rituals</h3>
          <p>Perfect for home pooja, meditation, and daily fragrance.</p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products-section">
        <div className="container">
          <div className="section-head">
            <h2>Our Collections</h2>
            <div className="filters">
              {['All', 'Agarbatti Sticks', 'Dhoop', 'Incense Sticks'].map(cat => (
                <button
                  key={cat}
                  className={filter === cat ? 'active' : ''}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="product-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="buy-now-overlay">
                    <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer" className="btn-amazon">
                      View on Amazon
                    </a>
                  </div>
                </div>
                <div className="product-info">
                  <span className="category">{product.category}</span>
                  <h3>{product.name}</h3>
                  <p className="description">{product.description}</p>
                  <div className="attributes">
                    {product.usage.map(u => <span key={u} className="tag">{u}</span>)}
                  </div>
                  <div className="price-row">
                    <span className="price">{product.price}</span>
                    <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer" className="amazon-link">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container about-grid">
          <div className="about-image">
            <img src="/assets/hero.png" alt="About Divyagrah" />
          </div>
          <div className="about-content">
            <span className="subtitle">The Essence of Divyagrah</span>
            <h2>Crafting Purity Since Inception</h2>
            <p>Divyagrah was born out of a desire to provide the most authentic and pure incense products for every household. We understand that fragrance is a bridge to the divine.</p>
            <p>Our products are non-toxic, eco-friendly, and crafted with traditional methods passed down through generations.</p>
            <div className="stats">
              <div className="stat-item">
                <h4>100%</h4>
                <p>Natural Materials</p>
              </div>
              <div className="stat-item">
                <h4>50+</h4>
                <p>Fragrance Variants</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src="/assets/logo.jpg" alt="Divyagrah" />
            <p>Spreading divinity and purity in every home across the nation.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Collection</a></li>
              <li><a href="#about">Our Story</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>Email: info@divyagrah.com</p>
            <p>Support: +91 99999 99999</p>
            <div className="socials">
              {/* Social icons placeholder */}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Divyagrah. All rights reserved. | Delivery managed by Amazon</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
