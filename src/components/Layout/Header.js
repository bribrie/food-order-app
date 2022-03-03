import React from "react";
import mealImage from "../../assets/meals.jpeg";
import styles from "./Header.module.scss";
import HeaderCartButton from "./HeaderCartButton";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
}
