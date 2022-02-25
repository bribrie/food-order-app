import React from "react";
import mealImage from "../../assets/meals.jpeg";

export default function Header() {
  return (
    <>
      <header>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src={mealImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
}
