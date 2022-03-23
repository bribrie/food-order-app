import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/CartContext";

const MealItem = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  const dollarPrice = `$${price.toFixed(2)}`;

  return (
    <li>
      <div>
        <h3>{name}</h3>
        <div>{description}</div>
        <div>{dollarPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
