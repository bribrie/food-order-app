import React from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.scss";

const HeaderCartButton = () => {
  return (
    <>
      <button className={styles.button}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>2</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
