import mealImage from "../../assets/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";
import styles from "../../styles/Layout/Header.module.scss";

const Header = ({ onShow }) => {
  return (
    <>
      <header className={styles.container}>
        <h1 className={styles.logo}>React Meals</h1>
        <HeaderCartButton onShow={onShow} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
