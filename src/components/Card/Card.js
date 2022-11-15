import styles from './Card.module.scss'

export default function Card ({title, imageUrl, desc, price}) {

  return (
    <div className={styles.card}>
      <img 
        alt="Товар"
        src={'./img/' + imageUrl}
      />
      <h2>{title}</h2>
      <p>{desc}</p>
      <b>{price}$</b>
      <div className={styles.add_to_cart}>+</div>
    </div>
  )
}
