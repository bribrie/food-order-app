import { useRef, useState } from "react";
import Input from "../../UI/Input";
import styles from "../../../styles/Meals/MealItemForm.module.scss";

const MealItemForm = ({ id, onAddToCart }) => {
  const amountRef = useRef();
  const [amountIsVaild, setAmountIsValid] = useState(true);

  const handleAmount = (e) => {
    e.preventDefault();
    const enteredAmount = amountRef.current.value;
    const enteredAmountNumber = +enteredAmount; // value는 항상 문자열이기 때문에 숫자로 바꿔줘야 함
    // 빈칸과 글자 수 확인
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      setAmountIsValid(false); //false일 때, 에러 메세지 나옴
      return;
    }
    //Form에는 총 가격만 있기 때문에, id나 다른 것들이 필요해서 context가 아닌 함수 호출
    onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={styles.form} onSubmit={handleAmount}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: `amount_ ${id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+Add</button>
      {!amountIsVaild && <p>Please enter a vaild amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
