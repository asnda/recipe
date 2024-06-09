import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import "./App.css";
import "./Homepage.css";

const App = () => {
  const [recipes] = useState([
    {
      id: 1,
      title: "Spaghetti Bolognese",
      description: "A classic Italian pasta dish with rich meat sauce.",
      ingredients: [
        "Spaghetti",
        "Minced Meat",
        "Onions",
        "Carrots",
        "Celery sticks",
        "Olive Oil",
        "Garlic cloves",
        "Bacon rashers",
        "Sprigs rosemary",
      ],
      steps: ["Put a large saucepan on a mdium heat and add 1 tbsp olive oil.", "Add 4 finely chopped bacon rashers and fry for 10 minutes until golden crisp.", "Reduce the heat and add the 2 onions, 2 carrots, 2 sprigs rosemary, all finely chopped, then fry for 10 mins.", "Increase the heat to medium-high, add beef mince and cook stirring for 3-4 mins until the meat is browned all over.","Cook 400g spaghetti following the pack instructions.","Drain the spaghetti and serve with grated parmesan."],
      image:
        "https://media.istockphoto.com/id/1297397001/photo/traditional-italian-spaghetti-bolognese-in-the-bowls-directly-above-horizontal-photo.jpg?s=612x612&w=0&k=20&c=R6gpUYis880lvWYeNeIOk0lMTLt0-0pzDFR64sKWjxQ=",
        prepTime: "15 mins",
      cookTime: "30 mins",
      totalTime: "45 mins",
      servings: 4,
      nutrition: {
        calories: "400 kcal",
        protein: "20g",
        fat: "15g",
        carbs: "50g"
      },
      category: "Dinner" // Category for dinner recipes
    },
    {
      id: 2,
      title: "Grilled Salmon",
      description: "A delicious and healthy grilled salmon dish.",
    ingredients: [
      "Salmon Fillets",
      "Olive Oil",
      "Lemon Juice",
      "Garlic",
      "Salt",
      "Pepper",
      "Fresh Dill",
    ],
    steps: [
      "Preheat grill to medium-high heat.",
      "Brush salmon fillets with olive oil and lemon juice.",
      "Season with minced garlic, salt, and pepper.",
      "Grill salmon for 6-8 minutes per side, or until cooked through.",
      "Garnish with fresh dill and serve.",
    ],
      image:
        "https://media.istockphoto.com/id/483063958/photo/roasted-salmon-and-vegetables.jpg?s=612x612&w=0&k=20&c=gC1wbzIjSS-MNjoecuha8xEyGb83TQu8dABz_fz_bjs=",
        prepTime: "10 mins",
        cookTime: "15 mins",
        totalTime: "25 mins",
        servings: "4 servings",
        nutrition: {
          calories: "300 kcal",
          protein: "25g",
          fat: "20g",
          carbs: "2g"
        },
        category: "Dinner" // Category for dinner recipes
    },
    {
      id: 3,
      title: "Grilled Chicken Wings",
      description:
        "Delicious chicken wings marinated in lemon and herbs, then grilled to perfection.",
      ingredients: [
        "Chicken Wings",
        "Lemons",
        "Garlic",
        "Olive Oil",
        "Thyme",
        "Rosemary",
        "Salt",
        "Pepper",
      ],
      steps: [
        "Combine lemon juice, lemon zest, minced garlic, olive oil, thyme leaves, chopped rosemary, salt, and pepper to create the marinade.",
        "Marinate chicken wings in the refrigerator for at least 1 hour.",
        "Preheat grill to medium-high heat.",
        "Grill chicken wings for 15-20 minutes, turning occasionally, until cooked through and golden brown.",
        "Serve hot with lemon wedges and chopped parsley.",
      ],
      image: "https://media.istockphoto.com/id/1029369404/photo/chicken-wings-and-vegetables-on-wooden-background.jpg?s=612x612&w=0&k=20&c=_Gv2T-dCsKu-AMDoWc3dqc9PA1Zxo7acF2vaNhDOiNM=",
      prepTime: "1 hour",
      cookTime: "20 minutes",
      totalTime: "1 hour 25 minutes",
      servings: "2 servings",
      nutrition: {
        calories: "250 kcal",
        protein: "25g",
        fat: "15g",
        carbs: "2g",
      },
      category: "Dinner" // Category for dinner recipes
    },

    {
      id: 4,
      title: "Tiramisu",
      description: "A classic pasta dish with prawns in a garlic and lemon sauce.",
      ingredients: [
        "2 cups strong black coffee",
        "1/2 cup marsala ",
        "3 eggs, separated",
        "1/3 cup caster sugar",
        "250g mascarpone",
        "300ml Bulla Thickened Cream, lightly whipped",
        "Cocoa powder, for dusting",
        "LadyFingers"
      ],
      steps: [
        "Pour coffee and marsala into a shallow dish or baking dish. Set aside.",
        "Beat egg yolks and sugar in a large bowl with electric beaters until pale and thick. Add the mascarpone and whipped cream, mixing gently until just combined.",
        "Beat egg whites in a medium bowl with electric beaters until soft peaks form. Using a large metal spoon, gently fold eggwhites into the mascarpone mixture.",
        "Dip enough sponge finger biscuits into the coffee mixture to cover the base of a 19cm square ceramic dish. Cover the biscuits with one-third of the mascarpone mixture. Repeat layers 2 times, ending with the cream. Cover with plastic wrap and refrigerate for at least 2 hours. Dust generously with cocoa powder and serve.",
,
      ],
      nutrition: {
        calories: "350 kcal",
        protein: "25g",
        fat: "10g",
        carbs: "40g",
      },
      category: "Dessert" ,// Category for dinner recipes
      prepTime: "10 minutes",
      cookTime: "20 minutes",
      totalTime: "30 minutes",
      servings: "2 servings",
      image:
        "https://media.istockphoto.com/id/183869552/photo/pasta-with-king-prawns.jpg?s=612x612&w=0&k=20&c=aLTrQ16nUuIEnoP6_haHbJ9ZZMjV7xyuhIBPG4ipFeo=",
    },
    {
      id: 5,
      title: "Grilled Lamb Chops",
      description:
        "Tender and juicy lamb chops marinated in a blend of herbs and grilled to perfection.",
      ingredients: [
        "Lamb Chops",
        "Olive Oil",
        "Garlic",
        "Rosemary",
        "Thyme",
        "Lemon",
        "Salt",
        "Pepper",
      ],
      steps: [
        "Combine olive oil, minced garlic, chopped rosemary, thyme, lemon juice, salt, and pepper to create the marinade.",
        "Marinate lamb chops in the refrigerator for at least 2 hours.",
        "Preheat grill to medium-high heat.",
        "Grill lamb chops for 5-7 minutes on each side, until desired doneness.",
        "Let rest for a few minutes before serving.",
      ],
      image:
        "https://media.istockphoto.com/id/467413762/photo/photograph-of-a-plate-of-organic-grilled-lamb-chops.jpg?s=612x612&w=0&k=20&c=s6fcmkW8GabU3FsGd2hNiNk3Aqr2pcPmGFXrUffsbjo=",
        prepTime: "2 hours",
      cookTime: "15 minutes",
      totalTime: "2 hours 15 minutes",
      servings: 4,
      nutrition: {
        calories: "300 kcal",
        protein: "30g",
        fat: "20g",
        carbs: "1g"
      },
      category: "Dessert" // Category for dinner recipes
    },
    {
      id: 6,
      title: "Chicken Curry",
      description: "A spicy and flavorful curry with tender chicken pieces.",
      ingredients: [
        "Chicken",
        "Curry Powder",
        "Coconut Milk",
        "Onion",
        "Garlic",
        "Ginger",
        "Tomato Paste",
        "Chili Powder",
        "Cumin",
        "Coriander",
        "Salt",
        "Pepper",
        "Fresh Cilantro",
        "Rice (optional)",
      ],
      steps: [
        "Heat oil in a pot and sauté chopped onions, garlic, and ginger until golden brown.",
        "Add chicken pieces and cook until browned.",
        "Stir in curry powder, tomato paste, chili powder, cumin, and coriander. Cook for a few minutes.",
        "Add coconut milk and simmer until chicken is cooked through and the sauce thickens.",
        "Season with salt and pepper to taste.",
        "Garnish with fresh cilantro and serve with rice if desired.",
      ],
      image:
        "https://media.istockphoto.com/id/579767430/photo/chicken-tikka-masala.jpg?s=612x612&w=0&k=20&c=EjeRH4r3w9qQ2WELp5qkqkUh1HbJJwRcFNNv1suOtvM=",
        prepTime: "20 mins",
      cookTime: "40 mins",
      totalTime: "60 mins",
      servings: 4,
      nutrition: {
        calories: "350 kcal",
        protein: "30g",
        fat: "20g",
        carbs: "10g"
      },
      category: "Dessert" // Category for dinner recipes
    },
  ]);


  return (
    <Router>
      <div className="App">
        {/* Hero Section */}
        <header className="hero">
         
          <div className="hcontent">
            <h1>Welcome to TASTY</h1>
            <p>
              Discover a world of delightful recipes that will transform your
              kitchen into a haven of flavor and joy. Whether you're a seasoned
              chef or just starting out, we have something for everyone. Dive
              into our collection and let your culinary journey begin!
              <br />
              Happy Cooking!
              <br />
              The TASTY Team
            </p>
            
          </div>
        </header>
        <section className="about-us">
    <div className="about-us-content">
      <h2>About Us</h2>
      <p>
      TASTY, a renowned recipe website, has established itself as a culinary hub, 
      offering a diverse array of recipes to satisfy every palate. With a dedication to 
      delivering delightful dishes, TASTY has garnered widespread acclaim for its 
      innovative approach to cooking, providing both seasoned chefs and aspiring cooks with a 
      wealth of culinary inspiration. Boasting an extensive collection of recipes spanning 
      various cuisines and dietary preferences.
      <br /><br />
       TASTY has become a go-to destination for 
      anyone seeking to elevate their culinary skills and explore new flavors. Their commitment 
      to excellence has not gone unnoticed, as TASTY has received numerous accolades and
       awards for their exceptional content, user-friendly interface, and dedication to 
       promoting the joy of cooking. From tantalizing appetizers to decadent desserts, 
       TASTY continues to empower food enthusiasts worldwide 
      to embark on a flavorful journey in the kitchen, making every meal a memorable experience.
      </p>
    </div>
    <div className="video-container">
    <iframe
        src="https://www.youtube.com/embed/n7SJ2hOgqOc?autoplay=1"
        title="About Us Video"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  </section>
  

        {/* Recipes Section */}
        <section className="recipes-section">
          <h2 className="recipes-heading">Our top picks for week</h2>
          <Routes>
            <Route path="/" element={<RecipeList recipes={recipes} />} />
            <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
};

export default App;
