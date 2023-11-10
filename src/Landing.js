import React from "react";
import "./Landing.css"; // Import your CSS for styling

const Landing = () => {
  return (
    <div className="landing-page">
      {/* Header Section - Introduction */}
      <header>
        <h1>Welcome to Billing Software</h1>
        <p>Effortless Billing for Your Business</p>
      </header>
      {/* Visuals and Explanation Section - Highlight Features */}
      <section className="visuals-section">
        <div className="software-screenshot">
          {/* Add a screenshot or UI image of your software */}
          {/* <img
            src="data:image/jpeg;base64,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"
            alt="Software Screenshot"
          /> */}
        </div>
        <div className="explanation">
          <h2>Features and Benefits</h2>
          <ul>
            <li>Feature 1: Describe the feature and its benefits.</li>
            <li>Feature 2: Explain how it simplifies billing processes.</li>
            <li>Feature 3: Highlight key advantages for users.</li>
            <li>Feature 1: Describe the feature and its benefits.</li>
            <li>Feature 2: Explain how it simplifies billing processes.</li>
            <li>Feature 3: Highlight key advantages for users.</li>
            <li>Feature 1: Describe the feature and its benefits.</li>
            <li>Feature 2: Explain how it simplifies billing processes.</li>
            <li>Feature 3: Highlight key advantages for users.</li>
            <li>Feature 1: Describe the feature and its benefits.</li>
            
          </ul>
        </div>
      </section>

      <hr/>

      {/* Testimonials Section - Build Trust */}
      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonial">
          <blockquote>
            "I've been using this software for a year, and it has saved me time
            and money."
          </blockquote>
          <p>- John Doe, CEO at ABC Inc.</p>
        </div>
        {/* Add more testimonials as needed */}
      </section>
      {/* Call-to-Action Section - Encourage Sign-Ups */}
      <section className="cta-section">
        <h2>Get Started Today</h2>
        <p>
          Join thousands of businesses that trust our billing software for their
          needs.
        </p>
        <a href="/signup" className="cta-button">
          Sign Up for a Free Trial
        </a>
        {/* Use appropriate link and CTA text */}
      </section>
      {/* Video Explanation Section - Visualize Software Usage */}
      <section className="video-section">
        <h2>See How It Works</h2>
        <div className="video-container">
          {/* Embed a video explaining your software */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/your-video-id"
            title="Software Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
      {/* Trust Indicators Section - Establish Credibility */}
      <section className="trust-indicators">
        <h2>Why Choose Us</h2>
        <p>Our software is trusted by thousands of businesses worldwide.</p>
        <div className="awards-and-trust">
          {/* Display awards, certifications, and trust badges */}
        </div>
      </section>
      {/* Pricing Information Section - Transparent Pricing */}
      <section className="pricing-section">
        <h2>Choose Your Plan</h2>
        <div className="pricing-cards">
          {/* Plan 1 */}
          <div className="pricing-card">
            <h3>Basic Plan</h3>
            <p className="price">₹14999/month</p>
            <ul className="key-features">
              <li>Feature 1: Description of feature</li>
              <li>Feature 2: Description of feature</li>
              <li>Feature 3: Description of feature</li>
            </ul>
            <a href="/signup" className="cta-button">
              Get Started
            </a>
          </div>

          {/* Plan 2 */}
          <div className="pricing-card">
            <h3>Premium Plan</h3>
            <p className="price">₹19999/month</p>
            <ul className="key-features">
              <li>Feature 1: Description of feature</li>
              <li>Feature 2: Description of feature</li>
              <li>Feature 3: Description of feature</li>
            </ul>
            <a href="/signup" className="cta-button">
              Get Started
            </a>
          </div>

          {/* Plan 3 */}
          <div className="pricing-card">
            <h3>Pro Plan</h3>
            <p className="price">₹24999/month</p>
            <ul className="key-features">
              <li>Feature 1: Description of feature</li>
              <li>Feature 2: Description of feature</li>
              <li>Feature 3: Description of feature</li>
            </ul>
            <a href="/signup" className="cta-button">
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section - Address Common Questions */}
      <section className="faq-section">
        <div className="faq-container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {/* FAQ 1 */}
            <div className="faq-item">
              <h3>Q: Is your billing software user-friendly?</h3>
              <p>
                A: Absolutely! We designed our software with an intuitive user
                interface, making it easy for anyone to use, even if you're not
                tech-savvy.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="faq-item">
              <h3>Q: Can I customize invoices with your software?</h3>
              <p>
                A: Yes, you can fully customize your invoices. Add your logo,
                change colors, and personalize the content to match your brand
                identity.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="faq-item">
              <h3>Q: How secure is my data with your software?</h3>
              <p>
                A: We take data security seriously. Your data is encrypted and
                stored on secure servers. We regularly update our security
                measures to protect your information.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      {/* Trusted Brands Section - Highlight Your Credibility */}
      <section className="trusted-brands-section">
      <h2>Trusted by Leading Brands</h2>
      <div className="trusted-brands-container">
        {/* Points About Trust */}
        <div className="trusted-points">
          <ul>
            <li>1. Trusted by over 1,000 businesses worldwide</li>
            <li>2. Industry-leading customer satisfaction</li>
            <li>3. Award-winning software recognized by experts</li>
          </ul>
        </div>

        {/* Logos of Trusted Brands */}
        <div className="brand-logos">
          <div className="brand-card">
            <img src="https://cdn.dribbble.com/users/1767229/screenshots/5294854/media/44914aea70fd79e0e4742ad283037299.png?resize=400x300&vertical=center" alt="Brand 1" />
          </div>
          <div className="brand-card">
            <img src="https://mma.prnewswire.com/media/812226/Pine_Labs_Logo.jpg?p=facebook" alt="Brand 2" />
          </div>
          <div className="brand-card">
            <img src="https://images-platform.99static.com/A6DE_LetVZw5IfHTCAcs6T3txAQ=/0x0:1585x1585/500x500/top/smart/99designs-contests-attachments/87/87688/attachment_87688529" alt="Brand 3" />
          </div>
          {/* Add more brand cards as needed */}
        </div>
      </div>
    </section>

      {/* Seamless on Any Device Section - Highlight Device Compatibility */}
      <section className="seamless-device-section">
      <div className="seamless-device-container">
        {/* Content about Device Compatibility */}
        <div className="seamless-device-content">
          <h2>Seamless on Any Device</h2>
          <p>Our billing software is compatible with a wide range of devices, ensuring you can access your data and manage your business from anywhere.</p>
          <p>Whether you use a smartphone, tablet, or PC, our software offers a seamless experience, allowing you to stay in control.</p>
        </div>

        {/* Images of Compatible Devices */}
        <div className="device-images">
          <div className="device-card">
            <img src="https://img.lovepik.com/element/45007/0572.png_860.png" alt="Phone" />
            <p>Phone</p>
          </div>
          <div className="device-card">
            <img src="data:image/jpeg;base64,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" alt="Tablet" />
            <p>Tablet</p>
          </div>
          <div className="device-card">
            <img src="https://w7.pngwing.com/pngs/1011/477/png-transparent-statistics-management-statistical-process-control-analytics-others-entrepreneurship-business-industry-thumbnail.png" alt="PC" />
            <p>PC</p>
          </div>
        </div>
      </div>
    </section>

      {/* Live Chat or Support Section - Provide Assistance */}
      <section className="live-chat-support">
        <h2>Here to Help</h2>
        <p>
          Have questions? Our support team is ready to assist you. Chat with us
          now!
        </p>
        <a href="/support" className="cta-button">
          Chat with Support
        </a>
        {/* Use appropriate link and CTA text */}
      </section>
      {/* Limited Time Offers Section - Create Urgency */}
      <section className="limited-time-offers">
        <h2>Special Promotion</h2>
        <p>
          For a limited time, enjoy a discount on our software. Don't miss out!
        </p>
        <a href="/pricing" className="cta-button">
          See Pricing
        </a>
        {/* Use appropriate link and CTA text */}
      </section>
      {/* Privacy Policy and Trust Assurance Section - Data Security */}
      <section className="privacy-policy">
        <p>
          Your privacy is important to us. Read our{" "}
          <a href="/privacy-policy">Privacy Policy</a>.
        </p>
        {/* Link to your privacy policy page */}
      </section>
    </div>
  );
};

export default Landing;
