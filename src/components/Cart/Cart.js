import { useContext } from "react";
import CartContext from "../../store/CartContext";
import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.scss";
import CartItem from "./CartItem";

const Cart = ({ onHide, onShow }) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0; //Order btn 표시 위한 상태

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const CartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal>
      {CartItems}
      <div>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.action}>
        <button onClick={onHide}>Close</button>
        {hasItems && <button onClick={onShow}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
