import React from 'react'

export default function Header() {
  return (
    <header>
        <div>
            <span className="logo">House Staffe</span>
            <ul className="nav">
              <li><a href="#">Про нас</a></li>
              <li><a href="#">Контакты</a></li>
              <li><a href="#">Кабинет</a></li>
            </ul>
        </div>
        <div className="presentation"></div>
    </header>
  )
}
