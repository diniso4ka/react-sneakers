import s from './Favorite.module.scss'
import FavoriteCard from './FavoriteCard/FavoriteCard'


const Favorite = ({ favorites, onAddToFavorite }) => {


   const favoritElements = favorites.map((item) => <FavoriteCard
      key={item.name}
      name={item.name}
      price={item.price}
      logo={item.logo}
      id={item.id}
      isFavorite={true}
      onFavorite={(obj) => onAddToFavorite(obj)}

   />)



   return (
      <div className={s.Favorite}>
         {favoritElements}
      </div>

   )
}

export default Favorite