import s from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header = ({ onClickCart }) => {
   return (
      <header>
         <Link to='/'>
            <div className={s.left}>
               <img src='https://github.com/diniso4ka/react-sneakers/blob/master/public/img/logo.png?raw=true' width={40} />
               <div className={s.info}>
                  <h3>REACT SNEAKERS</h3>
                  <p>Магазин лучших кроссовок</p>
               </div>
            </div>
         </Link>
         <div className={s.right}>
            <ul>
               <li onClick={onClickCart} className={s.cart}>
                  <img src='https://raw.githubusercontent.com/diniso4ka/react-sneakers/d39df04146bdc3039a6f3987f9498b716c13ca7f/public/img/cart.svg' />
                  <span>1205 руб.</span>
               </li>
               <Link to='/favorites'>
                  <li>
                     <img src='https://raw.githubusercontent.com/diniso4ka/react-sneakers/f7728eaf683e84b370dc929db92e0da85e39bcbb/public/img/favorite.svg' />
                  </li>
               </Link>
               <li>
                  <img src='https://raw.githubusercontent.com/diniso4ka/react-sneakers/d39df04146bdc3039a6f3987f9498b716c13ca7f/public/img/profile.svg' />
               </li>
            </ul>
         </div>
      </header >
   )
}

export default Header