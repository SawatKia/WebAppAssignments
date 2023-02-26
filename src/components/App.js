import "./App.css";
import FoodList from "./FoodList";

function App() {
  const handleVote = (foodName) => {
    console.log(`Voted for ${foodName}`);
  };

  const handleUnvote = (foodName) => {
    console.log(`Unvoted for ${foodName}`);
  };

  return (
    <div className="App">
      <h1 className="header">โหวตอาหาร</h1>
      <div className="row">
        <FoodList
          name="Pizza"
          description="Pizza is a savory Italian dish that has become a global sensation. 
          It consists of a round flattened dough, usually made with wheat flour and yeast,
          that is topped with tomato sauce and cheese. The cheese used for pizza can vary, 
          but mozzarella is a popular choice due to its stretchy texture and mild flavor. 
          Other toppings such as meats, vegetables, and seafood are also commonly added to enhance the flavor of the pizza. 
          Pizza is then baked in an oven until the crust is crispy and the cheese is melted and bubbly. 
          Pizza has become a staple in many households and is often served at parties, restaurants, and events."
          image="image/pizza.png"
          type="Italian"
          onVote={handleVote}
          onUnvote={handleUnvote}
        />
        <FoodList
          name="Coconut milk with chicken(ต้มข่าไก่)"
          description="Coconut milk with chicken is a delicious and popular Thai dish that consists of tender
          chicken cooked in a creamy and flavorful sauce made from coconut milk, herbs, and spices. 
          The chicken is marinated in a mixture of lemongrass, ginger, garlic, and chili peppers, which gives it a delicious flavor. 
          The sauce is made by simmering coconut milk with additional herbs and spices"
          image="image/Tom Kha.png"
          type="Thai"
          onVote={handleVote}
          onUnvote={handleUnvote}
        />
        <FoodList
          name="Chicken Khao Soi (ข้าวซอยไก่)"
          description="Chicken Khao Soi is a popular Northern Thai dish that 
          consists of egg noodles in a rich and spicy coconut curry soup, topped with crispy noodles and served 
          with a variety of fresh herbs and vegetables.
          The dish usually features tender pieces of chicken that have been simmered in the flavorful broth, 
          which is made with a mixture of coconut milk, curry paste, and spices like cumin, turmeric, and coriander. 
          The soup is typically garnished with a squeeze of lime juice, chopped cilantro, and thinly sliced shallots."
          image="image/Kaosoi with chicken.png"
          type="Northern Thai"
          onVote={handleVote}
          onUnvote={handleUnvote}
        />
      </div>
    </div>
  );
}

export default App;
