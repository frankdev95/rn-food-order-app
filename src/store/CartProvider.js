import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const totalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    let existingItemIndex = state.items.findIndex(
      (item) => action.item.id === item.id
    );
    let existingCartItem = state.items[existingItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: (existingCartItem.amount += action.item.amount),
      };
      console.log(updatedItem);
      updatedItems = [...state.items];
      updatedItems[existingCartItem] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: totalAmount,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const item = state.items.find((item) => item.id === action.id);
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => {
    dispatchCart({ type: "ADD_ITEM", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCart({ type: "REMOVE_ITEM", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
