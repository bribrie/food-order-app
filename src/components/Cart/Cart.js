import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.scss";

const Cart = ({ onHide, onShow }) => {
  const CartItems = (
    <ul>
      {[{ id: "c1", name: "sushi", amount: 2, price: 2.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {CartItems}
      <div>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.action}>
        <button onClick={onHide}>Close</button>
        <button onClick={onShow}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
