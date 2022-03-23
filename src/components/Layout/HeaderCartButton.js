import React, { useContext, useState, useEffect } from "react";
import CartContext from "../../store/CartContext";
import CartIcon from "../Cart/CartIcon";
import styles from "../../styles/Layout/HeaderCartButton.module.scss";

const HeaderCartButton = ({ onShow }) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const [isBtnHighlighted, setIsBtnHighlighted] = useState(false);
  // 음식 종류의 갯수가 아닌 담긴 음식의 총 수량으로 헤더 장바구니 수량 표시
  const numberOfCartItems = items.reduce((cur, item) => cur + item.amount, 0);
  const btnStyles = `${styles.button} ${isBtnHighlighted ? styles.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsBtnHighlighted(true);

    const timer = setTimeout(() => {
      setIsBtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer); //효과가 재실행될 때, 타이머를 지움
    };
  }, [items]);

  return (
    <button className={btnStyles} onClick={onShow}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
