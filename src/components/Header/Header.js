import React, { useState } from "react";
import styles from './Header.module.scss'
import Basket from "../Card/Basket/Basket";
import { RiShoppingCart2Line } from "react-icons/ri";

export default function Header({basketItems}) {

  let [basketOpen, setBasketOpen] = useState(false)

  return (
    <header>
        <div>
            <span className={styles.logo}>House Staffe</span>
            <ul className={styles.nav}>
              <li><a href="#">Про нас</a></li>
              <li><a href="#">Контакты</a></li>
              <li><a href="#">Кабинет</a></li>
            </ul>
            <RiShoppingCart2Line 
              onClick={() => setBasketOpen (basketOpen = !basketOpen)}
              className={`${styles.icon_basket} ${basketOpen && `${styles.active}`}`}
            />
            {basketOpen && <Basket basketItems={basketItems} />}
        </div>
        <div className={styles.presentation}></div>
    </header>
  )
}
