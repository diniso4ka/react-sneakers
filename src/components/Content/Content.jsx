import s from './Content.module.scss'
import Card from './Card/Card';

const Content = ({ searchValue, items, onAddToCart, OnChangeSearchInput, onAddToFavorite, isLoading }) => {


   const arr = [{ name: 1, logo: 2, price: 3 },
   { name: 2, logo: 3, price: 4 },
   { name: 5, logo: 6, price: 7 },
   { name: 5, logo: 6, price: 7 }, { name: 5, logo: 6, price: 7 }, { name: 5, logo: 6, price: 7 }, { name: 5, logo: 6, price: 7 }]


   const renderItems = () => {
      const filtredItems = items.filter((item) =>
         item.name.toLowerCase().includes(searchValue.toLowerCase()))
      return ((isLoading ? arr : filtredItems).map(item => <Card
         {...item}
         key={item.id}
         onPlus={(obj) => onAddToCart(obj)}
         onFavorite={(obj) => onAddToFavorite(obj)}
         loading={isLoading}
      />))
   }


   return (
      <div className={s.content}>
         <div className={s.header}>
            <div>
               <h1>{searchValue ? `Поиск по запросу: '${searchValue}'` : 'Все кроссовки'}</h1>
            </div>
            <div className={s.search}>
               <img src='https://github.com/diniso4ka/react-sneakers/tree/master/public/img' alt='' />
               <input onChange={OnChangeSearchInput} value={searchValue} placeholder='Поиск...' />
            </div>
         </div>
         <div className={s.items}>
            {renderItems()}
         </div>
      </div>

   )
}

export default Content