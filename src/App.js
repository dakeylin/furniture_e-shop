import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import React from 'react';
import Card from './components/Card/Card';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';


function App() {

  const [items, setitems] = useState([]);

  const [basketItems, setBasketItems] = useState([])

  const addCardOnBasket = (id) => {
    let oneItems = items.find((item) => item.id == id)
    setBasketItems([...basketItems, oneItems])
  }




  useEffect(() => {
    fetch("https://637359770bb6b698b6096223.mockapi.io/Furniture")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setitems(json)
      })
  }, [])

  return (
    <div className="wrapper">
      <Header basketItems={basketItems}/>
      <section className='content_list'>
        {items.map((obj) => (
          <Card 
            id={obj.id}
            key={obj.id}
            title={obj.title}
            imageUrl={obj.imageUrl}
            desc={obj.desc}
            category={obj.category}
            price={obj.price}
            addCardOnBasket={addCardOnBasket}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default App;