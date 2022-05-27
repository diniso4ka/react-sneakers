import './null.scss'
import React from 'react';
import s from './App.module.scss'
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Drawer from './components/Drawer/Drawer';




function App() {

  const [cartOpened, setCartOpened] = React.useState(false)
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])


  React.useEffect(() => {
    fetch('https://62910b9027f4ba1c65c70b38.mockapi.io/items').then((res) => {
      return res.json();
    }).then(json => {
      setItems(json)
    })
  }, []
  )

  const onClickCart = () => {
    setCartOpened(true)
  }

  const onAddToCart = (obj) => {
    setCartItems([...cartItems, obj])
    console.log(cartItems)
  }










  return (
    <div className={s.wrapper}>
      {cartOpened && <Drawer cartItems={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={onClickCart} />
      <Content onAddToCart={onAddToCart} items={items} />
    </div>

  );
}

export default App;
