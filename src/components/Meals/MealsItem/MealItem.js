import MealItemForm from "./MealItemForm";

const MealItem = ({ id, name, description, price }) => {
  const dollarPrice = `$${price.toFixed(2)}`;

  return (
    <li>
      <div>
        <h3>{name}</h3>
        <div>{description}</div>
        <div>{dollarPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
