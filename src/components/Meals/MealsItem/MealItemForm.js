import Input from "../../UI/Input";
import styles from "./MealForm.module.scss";

const MealItemForm = ({ id }) => {
  const handleAmount = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={handleAmount}>
      <Input
        label="Amount"
        input={{
          id: id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+Add</button>
    </form>
  );
};

export default MealItemForm;
