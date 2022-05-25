import s from './Content.module.scss'
import Card from './Card/Card';

const Content = () => {
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
            <Card />
            <Card />
            <Card />
            <Card />
         </div>
      </div>

   )
}

export default Content