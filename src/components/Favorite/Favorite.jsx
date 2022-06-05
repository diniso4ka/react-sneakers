import s from './Favorite.module.scss'
import Card from '../Content/Card/Card'
import React from 'react'
import AppContext from '../../context/context'
import Info from '../Info/info'

const Favorite = ({ onAddToFavorite, }) => {
   const { favorites } = React.useContext(AppContext)

   const favoritElements = favorites.map((item) => <Card
      key={item.id}
      name={item.name}
      price={item.price}
      img={item.img}
      id={item.id}
      favorite={true}
      onFavorite={onAddToFavorite}
   />)



   return (
      <div className={s.Favorite}>
         {favorites.length ?
            <div className={s.favoriteContainer}>{favoritElements}</div> :
            <Info
               title={'Закладок нет :('}
               img={'https://github.com/diniso4ka/react-sneakers/blob/master/public/img/fav-empty.png?raw=true'}
               description={'Вы ничего не добавляли в закладки'}
            />}
      </div>

   )
}

export default Favorite