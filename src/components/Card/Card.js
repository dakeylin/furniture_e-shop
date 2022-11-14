import React from 'react'
import styles from './Card.module.scss'

export default function Card () {
  return (
    <div className={styles.card}>
      <img
        width={150}
        height={170}
      />
      <h5>Test</h5>
      <div className="card_bottom">
        <div className="price">
          <p>Цена:</p>
          <span>Test руб.</span>
        </div>
        <div className="card_button">
          <button>
            <img />
          </button>
        </div>
      </div>
    </div>
  )
}
