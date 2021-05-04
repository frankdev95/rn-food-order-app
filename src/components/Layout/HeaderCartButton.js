import React, { useContext } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCardButton = (props) => {
  const cartCtx = useContext(CartContext);

  const totalCartAmount = cartCtx.items.reduce((acc, val) => {
    return acc + val.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span className={styles.badge}>{totalCartAmount}</span>
    </button>
  );
};

export default HeaderCardButton;
