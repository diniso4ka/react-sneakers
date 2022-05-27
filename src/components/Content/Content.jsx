import s from './Content.module.scss'
import Card from './Card/Card';

const Content = ({ cards }) => {

   const cardElements = cards.map(item => <Card name={item.name} price={item.price} logo={item.img}
      onPlus={() => console.log(123)}
      onFavorit={() => console.log(123)}
   />)

   return (
      <div className={s.content}>
         <div className={s.header}>
            <div>
               <h1>Все кроссовки</h1>
            </div>
            <div className={s.search}>
               <img src='/img/search.svg' alt='' />
               <input placeholder='Поиск...' />
            </div>
         </div>
         <div className={s.items}>
            {cardElements}
         </div>
      </div>

   )
}

export default Content