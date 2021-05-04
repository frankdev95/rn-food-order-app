import React from "react";
import mealsImage from "../../assets/images/header.jpg";
import styles from "./Header.module.css";
import HeaderCardButton from "./HeaderCartButton";
import HeaderCarButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1 className={styles.header__logo}>ReactMeals</h1>
        <HeaderCardButton onClick={props.onShowCart} />
      </header>
      <div className={styles["header__img"]}>
        <img src={mealsImage} alt="group meal" />
      </div>
    </React.Fragment>
  );
};

export default Header;
