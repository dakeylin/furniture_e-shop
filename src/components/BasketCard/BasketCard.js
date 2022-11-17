import React from "react";
import styles from "./BasketCard.module.scss";

export default function BasketCard({imageUrl, title, desc, price}) {
  return (
    <div className={styles.basket_card}>
      <img alt="Товар" src={"./img/" + imageUrl} />
      <h2>{title}</h2>
      <p>{desc}</p>
      <b>{price}$</b>
    </div>
  );
}
