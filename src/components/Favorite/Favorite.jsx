import s from './Favorite.module.scss'
import Card from '../Content/Card/Card'
import React from 'react'
import AppContext from '../../context/context'

const Favorite = ({ onAddToFavorite, }) => {
   const { favorites } = React.useContext(AppContext)

   const favoritElements = favorites.map((item) => <Card
      key={item.id}
      name={item.name}
      price={item.price}
      img={item.img}
      id={item.id}
      isFavorite={true}
      onFavorite={onAddToFavorite}
   />)



   return (
      <div className={s.Favorite}>
         {favoritElements}
      </div>

   )
}

export default Favorite