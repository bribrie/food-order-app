import { forwardRef } from "react";
import styles from "../../styles/UI/Input.module.scss";

//컴포넌트에 ref를 전달하는 방법 => forwardRef
const Input = forwardRef((props, ref) => {
  const { input, label } = props;

  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  );
});

export default Input;
