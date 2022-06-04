import s from './Favorite.module.scss'
import Card from '../Content/Card/Card'


const Favorite = ({ favorites, onAddToFavorite, items }) => {
   const favoritElements = favorites.map((item) => <Card
      key={item.id}
      name={item.name}
      price={item.price}
      logo={item.logo}
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