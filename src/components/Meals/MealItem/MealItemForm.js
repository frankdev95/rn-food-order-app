import React, { useContext, useRef, useState } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
  const [isFormValid, setIsFormValid] = useState(true);

  const inputRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const amountLength = inputRef.current.value.trim().length;
    const amount = +inputRef.current.value;

    if (amount <= 0 || amount > 5 || amountLength === 0) {
      setIsFormValid(false);
      return;
    }

    props.onAddToCart(amount);
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.form}>
      <Input
        ref={inputRef}
        input={{
          id: "Amount",
          type: "number",
          name: "amount",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        label="Amount"
      />
      <button>+ Add</button>
      {!isFormValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
