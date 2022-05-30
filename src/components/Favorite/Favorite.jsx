import s from './Favorite.module.scss'
import FavoriteCard from './FavoriteCard/FavoriteCard'


const Favorite = ({ favorites, isAdded, setIsAdded, isFavorite, setIsFavorite, onAddToFavorite, onAddToCart }) => {


   const favoritElements = favorites.map((item) => <FavoriteCard
      key={item.name}
      name={item.name}
      price={item.price}
      logo={item.logo}
      id={item.id}
      isFavorite={true}
   />)



   return (
      <div className={s.Favorite}>
         {favoritElements}
      </div>

   )
}

export default Favorite