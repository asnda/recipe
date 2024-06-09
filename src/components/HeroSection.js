import React from 'react';

const HeroSection = () => {
  return (
    <header className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Tasty Trails</h1>
        <p>
          Discover a world of delightful recipes that will transform your
          kitchen into a haven of flavor and joy. Whether you're a seasoned
          chef or just starting out, we have something for everyone. Dive
          into our collection and let your culinary journey begin!
          <br />
          Happy Cooking!
          <br />
          The Tasty Trails Team
        </p>
        <button className="btn">
          <Link to="/recipe">See Dinner Recipes</Link>
        </button>
      </div>
    </header>
  );
};

export default HeroSection;
