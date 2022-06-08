import './null.scss'
import s from './App.module.scss'
import React from 'react';
import axios from 'axios';
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom';
import AppContext from './context/context';
import { useCart } from './hooks/useCart';

import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Drawer from './components/Drawer/Drawer';
import Favorite from './components/Favorite/Favorite';
import Orders from './components/Orders/Orders';




function App() {
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)
  const [items, setItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(true)



  const OnChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  React.useEffect(() => {
    async function fetchData() {

      const itemsResponse = await axios.get('https://62910b9027f4ba1c65c70b38.mockapi.io/items');
      const cartResponse = await axios.get('https://62910b9027f4ba1c65c70b38.mockapi.io/cart');
      const favoritesResponse = await axios.get('https://62910b9027f4ba1c65c70b38.mockapi.io/favorites');


      setCartItems(cartResponse.data)
      setFavorites(favoritesResponse.data)
      setItems(itemsResponse.data)
      await setIsLoading(false)

    }


    fetchData()
  }, []
  )




  const onClickCart = () => {
    setCartOpened(true)
  }

  const onAddToCart = async (obj) => {
    console.log(obj)
    try {
      if (cartItems.find((item) => item.name === obj.name)) {
        axios.delete(`https://62910b9027f4ba1c65c70b38.mockapi.io/cart/${obj.id}`)
        setCartItems((prev) => prev.filter((item) => item.name !== obj.name))
      } else {
        const { data } = await axios.post('https://62910b9027f4ba1c65c70b38.mockapi.io/cart', obj);
        setCartItems(prev => [...prev, data])
      }
    } catch (error) {
      alert('Не удалось добавить к корзину')
    }
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://62910b9027f4ba1c65c70b38.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((item) => item.name === obj.name)) {
        axios.delete(`https://62910b9027f4ba1c65c70b38.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => item.name !== obj.name))
      } else {
        const { data } = await axios.post('https://62910b9027f4ba1c65c70b38.mockapi.io/favorites', obj)
        setFavorites((prev) => [...prev, data])
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты')
    }

  }

  const isItemAdded = (name) => {
    return cartItems.some(obj => obj.name === name)
  }

  const isItemFavorited = (name) => {
    return favorites.some(obj => obj.name === name)
  }











  return (
    <AppContext.Provider value={{ favorites, items, isItemAdded, isItemFavorited, setCartOpened, setCartItems, cartItems }}>
      <div className={s.wrapper}>
        <BrowserRouter>
          {cartOpened && <Drawer
            onRemoveItem={onRemoveItem}
            cartItems={cartItems}
            onClose={() => setCartOpened(false)} />}
          <Header
            Routes={Routes}
            onClickCart={onClickCart} />
          <Routes>
            <Route path='/react-sneakers' exect element={<Content
              onAddToFavorite={onAddToFavorite}
              onRemoveItem={onRemoveItem}
              searchValue={searchValue}
              OnChangeSearchInput={OnChangeSearchInput}
              onAddToCart={onAddToCart}
              items={items}
              cartItems={cartItems}
              isLoading={isLoading}
            />} />
            <Route path='/favorites' exect element={<Favorite
              onAddToFavorite={onAddToFavorite}
            />} />
            <Route path='/orders' exect element={<Orders
              isLoading={isLoading}
            />} />
          </Routes>
        </BrowserRouter>
      </div >
    </AppContext.Provider>


  );
}

export default App;
