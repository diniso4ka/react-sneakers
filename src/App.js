import './null.scss'
import React from 'react';
import s from './App.module.scss'
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Drawer from './components/Drawer/Drawer';
import axios from 'axios';




function App() {

  const [cartOpened, setCartOpened] = React.useState(false)
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')


  const OnChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  React.useEffect(() => {
    axios.get('https://62910b9027f4ba1c65c70b38.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://62910b9027f4ba1c65c70b38.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });

  }, []
  )

  const onClickCart = () => {
    setCartOpened(true)
  }

  const onAddToCart = (obj) => {

    axios.post('https://62910b9027f4ba1c65c70b38.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj])
  }

  const onRemoveItem = (id) => {
    console.log(id)
    axios.delete(`https://62910b9027f4ba1c65c70b38.mockapi.io/cart${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id))

  }











  return (
    <div className={s.wrapper}>
      {cartOpened && <Drawer onRemoveItem={onRemoveItem} cartItems={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={onClickCart} />
      <Content onRemoveItem={onRemoveItem} searchValue={searchValue} OnChangeSearchInput={OnChangeSearchInput} onAddToCart={onAddToCart} items={items} />
    </div>

  );
}

export default App;
