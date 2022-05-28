import s from './Content.module.scss'
import Card from './Card/Card';

const Content = ({ searchValue, items, onAddToCart, OnChangeSearchInput }) => {

   const cardElements = items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())).map(item => <Card
      key={item.name}
      name={item.name}
      price={item.price}
      logo={item.img}
      onPlus={(obj) => onAddToCart(obj)}
      onFavorit={() => console.log(123)}


   />)

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
            {cardElements}
         </div>
      </div>

   )
}

export default Content