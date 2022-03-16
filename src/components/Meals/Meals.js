import AvailableMeals from "./AvailableMeals";
import MealItemForm from "./MealsItem/MealItemForm";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <main>
      <MealsSummary />
      <AvailableMeals />
      <MealItemForm />
    </main>
  );
};

export default Meals;
