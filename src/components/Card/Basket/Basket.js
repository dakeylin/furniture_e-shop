import React from "react";
import BasketCard from "../../BasketCard/BasketCard";
import styles from "./Basket.module.scss";

export default function Basket({ basketItems }) {
  return (
    <div className={styles.basket}>
        {basketItems.length > 0 ? (
            basketItems.map((obj) =>(
                <BasketCard 
                    id={obj.id}
                    title={obj.title}
                    imageUrl={obj.imageUrl}
                    desc={obj.desc}
                    price={obj.price}
                />
            ))
        ) : (
            <p>пс..</p>
        ) }
    </div>
  );
}
