import s from './Header.module.scss'

const Header = ({ onClickCart }) => {
   return (
      <header>
         <div className={s.left}>
            <img src='/img/logo.png' width={40} />
            <div className={s.info}>
               <h3>REACT SNEAKERS</h3>
               <p>Магазин лучших кроссовок</p>
            </div>
         </div>
         <div className={s.right}>
            <ul>
               <li onClick={onClickCart} className={s.cart}>
                  <img src='/img/cart.svg' />
                  <span>1205 руб.</span>
               </li>
               <li>
                  <img src='/img/profile.svg' />
               </li>
            </ul>
         </div>
      </header>
   )
}

export default Header