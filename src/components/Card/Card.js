import styles from './Card.module.scss'
import React from 'react'

export default function Card ({id, title, imageUrl, desc, price, addCardOnBasket}) {

  return (
    <div className={styles.card}>
      <img 
        alt="Товар"
        src={'./img/' + imageUrl}
      />
      <h2>{title}</h2>
      <p>{desc}</p>
      <b>{price}$</b>
      <div onClick={() => addCardOnBasket(id)} className={styles.add_to_cart}>+</div>
    </div>
  )
}
