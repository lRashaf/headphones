import React from 'react';
import headphoneImage from './assets/headphone.png'; // تأكد من المسار الصحيح للصورة
import './App.css';




function App() {
  return (
    <div>
      {/* الهيدر */}
      <header className="header">
        <div className="logo">
          <h1>Soundbeam</h1> {/* الشعار أصبح نص */}
        </div>
        <nav className="nav">
          <button className="nav-btn" onClick={() => window.scrollTo({ top: document.getElementById('home').offsetTop, behavior: 'smooth' })}>Home</button>
          <button className="nav-btn" onClick={() => window.scrollTo({ top: document.getElementById('benefits').offsetTop, behavior: 'smooth' })}>Benefits</button>
          <button className="nav-btn" onClick={() => window.scrollTo({ top: document.getElementById('reviews').offsetTop, behavior: 'smooth' })}>Reviews</button>
          <button className="nav-btn" onClick={() => window.scrollTo({ top: document.getElementById('products').offsetTop, behavior: 'smooth' })}>Products</button> {/* إضافة زر للمنتجات */}
          <button className="nav-btn" onClick={() => window.scrollTo({ top: document.getElementById('contact').offsetTop, behavior: 'smooth' })}>Contact</button> {/* زر جديد للتنقل إلى سكشن Contact */}

        </nav>
      </header>

      {/* الصفحة الأولى (تصميم السماعة) */}
      <div id="home" className="content"> {/* إضافة ID للسكشن الأول */}
        <div className="text-content">
          <h1>Experience Superior Sound Like Never Before</h1>
          <p>Discover the perfect headphones for every sound enthusiast. At Soundbeam, we bring you premium over-ear headphones </p>
          <button className="order-button">Order Now</button>
        </div>
        <div className="image-content">
          <img src={headphoneImage} alt="Headphone" />
        </div>
      </div>

      {/* صفحة بينفت (سكشن جديد) */}
      <section id="benefits" className="benefits-section">
        <div className="benefits-content">
          <div className="benefit-item">
            <h2>Comfort</h2>
            <p>Feel the comfort with every use.</p>
          </div>
          <div className="benefit-item">
            <h2>Sound Quality</h2>
            <p>Experience crystal clear sound.</p>
          </div>
          <div className="benefit-item">
            <h2>Design</h2>
            <p>Stylish and modern design.</p>
          </div>
          <div className="benefit-item">
            <h2>Durability</h2>
            <p>Built to last for years.</p>
          </div>
        </div>
      </section>
{/* قسم المنتجات */}
<section id="products" className="products-section">
  <h2>Our Premium Headphones Collection</h2>
  <p>Find the Perfect Headphones for Your Unique Style and Needs</p>

  <div className="product-list">
    <div className="product-item">
      <img src="/images/pr5.png" alt="Product 1" />
      <h3>AirPods Max | sky blue</h3>

      <p>$100</p>
      <button className="order-button">Add to Cart</button>
    </div>
    <div className="product-item">
      <img src="/images/pr2.png" alt="Product 2" />
      <h3>AirPods Max | Green</h3>
      <p>$120</p>
      <button className="order-button">Add to Cart</button>
    </div>
    <div className="product-item">
      <img src="/images/product3.jpg.png" alt="Product 3" />
      <h3>Product 3</h3>
      <p>$150</p>
      <button className="order-button">Add to Cart</button>
    </div>
    
    <div className="product-item">
      <img src="/images/pr4.png" alt="Product 4" />
      <h3>Product 4</h3>
      <p>$180</p>
      <button className="order-button">Add to Cart</button>
    </div>
  </div>
</section>




      {/* السكشن الثالث */}
      <section className="music-section">
        <div className="music-content">
          <div className="image-content">
            <img src={headphoneImage} alt="Headphone" />
          </div>
          <div className="text-content">
            <h2>Music Like You've Never Heard Before</h2>
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content.</p>
            <button className="order-button">Order Now</button>
          </div>
        </div>
      </section>

      {/* السكشن الرابع (ريفيوهات) */}
      <section id="reviews" className="reviews-section">
      <h2 className="reviews-title">What Our Customers Say</h2> {/* النص الجديد فوق الريفيوز */}

        <div className="reviews-content">
          <div className="review-item">
            <p>"Amazing sound quality, the best headphones I've ever had!"</p>
            <p>- John Doe</p>
          </div>
          <div className="review-item">
            <p>"Comfortable to wear for long hours, highly recommend."</p>
            <p>- Jane Smith</p>
          </div>
          <div className="review-item">
            <p>"The design is sleek and modern, and the sound is crystal clear."</p>
            <p>- Sam Johnson</p>
          </div>
        </div>
        <div className="arrows">
          <button className="arrow-button">&#8592;</button>
          <button className="arrow-button">&#8594;</button>
        </div>
      </section>
      {/* السكشن الفارغ بين الريفيو والكوناكت */}
<section className="empty-section"></section>

<section className="contact-section" id="contact">
    <div className="contact-content">
        <h2>Stay Contact</h2>
        <form className="subscribe-form" action="#" method="post">
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
            />
            <button type="submit">Subscribe</button>
        </form>
    </div>
</section>
<footer>
  <div class="footer-container">
    <p>&copy; 2024 All rights reserved.</p>
    <p>Designed By Rasha</p>
    <div class="social-links">
      <a href="#">linkedin</a>
      <a href="#">github</a>
      <a href="#">Instagram</a>
    </div>
  </div>
</footer>


    </div>
  );
}

export default App;
