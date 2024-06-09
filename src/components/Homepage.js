import './Homepage.css';
import videoFile from './homevideo.mp4';

function App() {
  return (
    <div className="App">
      <header className="hero-section">
        <nav className="navbar">
          <div className="logo">TASTY TRAILS</div>
          <div className="nav-links">
            <a href="#">Recipes</a>
            <a href="#">Blogs</a>
            <a href="#">Groceries</a>
          </div>
         
        </nav>
        <div className="hero-content">
        <video autoPlay muted loop className="video-background">
          <source src="./homevideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
          <div className="description">
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
            <button className="btn">See Dinner Recipes</button>
          </div>
          
        </div>
      </header>
      {/* Groceries Section */}
      <section className="groceries-section">
        <h2 className="groceries-heading">Groceries</h2>
        <p className="groceriess-paragraph">
          At Yummy Yard, we believe that great recipes start with the finest
          ingredients. That's why we recommend shopping at these top grocery
          stores, where quality and variety meet. Shop at these stores to ensure
          your meals are made with the best ingredients around!
        </p>
        <div className="grid-container">
          <div className="grid-item">
            <img
              src="https://www.moneyweb.co.za/wp-content/uploads/2014/10/Woolworths-2-555x370.jpg"
              alt="Grocery"
            />
            <h3>Woolworths Food</h3>
            <p>Your go-to for organic and locally sourced produce.</p>
            <a href="#">Shop here</a>
          </div>
          <div className="grid-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH2Ul3ZQ5S4hNc9_udOZFFLS_KhtLzFrB9fA&s"
              alt="Grocery"
            />
            <h3>Food Lover's Market</h3>
            <p>
              A premium market with a vast selection of fresh and international
              ingredients
            </p>
            <a href="#">Shop here</a>
          </div>
          <div className="grid-item">
            <img
              src="https://v8w6z3c4.rocketcdn.me/wp-content/uploads/2021/10/1603978515514.jpg"
              alt="Grocery"
            />
            <h3>Checkers</h3>
            <p>A treasure trove of unique and affordable specialty items</p>
            <a href="#">Shop here</a>
          </div>
        </div>
      </section>
    </div>
  );
}