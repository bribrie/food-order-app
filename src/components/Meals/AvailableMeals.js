import Card from "../UI/Card";
import MealItem from "./MealsItem/MealItem";
import styles from "../../styles/Meals/AvailableMeals.module.scss";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://react-meals-c8fb6-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Error");
      }

      const result = await response.json();

      let loadedMeals = [];

      for (let key in result) {
        loadedMeals.push({
          id: key,
          name: result[key].name,
          description: result[key].description,
          price: result[key].price,
        });
      }
      setData(loadedMeals);
      setIsLoading(false);
    };
    fetchMeals();
  }, []);

  const MEALS_LIST = data.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      {isLoading ? (
        <div>Loading..</div>
      ) : (
        <Card>
          <ul>{MEALS_LIST}</ul>
        </Card>
      )}
    </section>
  );
};

export default AvailableMeals;
