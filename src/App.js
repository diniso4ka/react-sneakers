import './null.scss'
import s from './App.module.scss'

function App() {
  return (
    <div className={s.wrapper}>
      <div className={s.overlay}>
        <div className={s.drawer}>
          <div className={s.drawerHeader}>
            <h2>Корзина</h2>
            <img width={32} className={s.removeBtn} src='/img/btn-remove-focus.svg' alt='remove' />
          </div>


          <div className={s.items}>
            <div className={s.cartItem}>
              <div className={s.left}>
                <img width={70} height={70} src='/img/sneakers/1.jpg' alt='card' />
                <div className={s.cartInfo}>
                  <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
                  <b>12 999 руб.</b>
                </div>
              </div>
              <div>
                <img className={s.removeBtn} src='/img/btn-remove-focus.svg' alt='remove' />
              </div>
            </div>
            <div className={s.cartItem}>
              <div className={s.left}>
                <img width={70} height={70} src='/img/sneakers/1.jpg' alt='card' />
                <div className={s.cartInfo}>
                  <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
                  <b>12 999 руб.</b>
                </div>
              </div>
              <div>
                <img className={s.removeBtn} src='/img/btn-remove-focus.svg' alt='remove' />
              </div>
            </div>





          </div>


          <div className={s.cartTotalBlock}>
            <ul className={s.cartList}>
              <li className={s.price}>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li className={s.tax}>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button>Оформить заказ</button>
          </div>




        </div>
      </div>


      <header>
        <div className={s.headerLeft}>
          <img src='/img/logo.png' width={40} />
          <div className={s.headerInfo}>
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <div className={s.headerRight}>
          <ul>
            <li>
              <img src='/img/cart.svg' />
              <span>1205 руб.</span>
            </li>
            <li>
              <img src='/img/profile.svg' />
            </li>
          </ul>
        </div>
      </header>


      <div className={s.content}>
        <div className={s.contentHeader}>
          <div>
            <h1>Все кроссовки</h1>
          </div>
          <div className={s.searchBlock}>
            <img src='/img/search.svg' alt='' />
            <input placeholder='Поиск...' />
          </div>
        </div>
        <div className={s.sneakers}>
          <div className={s.card}>

            <div className={s.cardWrapper}>
              <img className={s.cardImage} src='/img/sneakers/1.jpg' width={133} height={112} />
              <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
              <div className={s.cardInfo}>
                <div className={s.cardPrice}>
                  <span>ЦЕНА:</span> <br />
                  <b>12 999 руб.</b>
                </div>
                <button className={s.button}>
                  <img src='/img/plus.svg' alt='' width={11} />
                </button>
              </div>
            </div>
            <img className={s.heart} src='/img/heart-unliked.svg' alt='unliked' />

          </div>

          <div className={s.card}>
            <div className={s.cardWrapper}>
              <img className={s.cardImage} src='/img/sneakers/2.jpg' width={133} height={112} />
              <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
              <div className={s.cardInfo}>
                <div className={s.cardPrice}>
                  <span>ЦЕНА:</span> <br />
                  <b>12 999 руб.</b>
                </div>
                <button className={s.button}>
                  <img src='/img/plus.svg' width={11} />
                </button>
              </div>
            </div>
          </div>

          <div className={s.card}>
            <div className={s.cardWrapper}>
              <img className={s.cardImage} src='/img/sneakers/3.jpg' width={133} height={112} />
              <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
              <div className={s.cardInfo}>
                <div className={s.cardPrice}>
                  <span>ЦЕНА:</span> <br />
                  <b>12 999 руб.</b>
                </div>
                <button className={s.button}>
                  <img src='/img/plus.svg' width={11} />
                </button>
              </div>
            </div>
          </div>

          <div className={s.card}>
            <div className={s.cardWrapper}>
              <img className={s.cardImage} src='/img/sneakers/4.jpg' width={133} height={112} />
              <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
              <div className={s.cardInfo}>
                <div className={s.cardPrice}>
                  <span>ЦЕНА:</span> <br />
                  <b>12 999 руб.</b>
                </div>
                <button className={s.button}>
                  <img src='/img/plus.svg' width={11} />
                </button>
              </div>
            </div>
          </div>

          <div className={s.card}>
            <div className={s.cardWrapper}>
              <img className={s.cardImage} src='/img/sneakers/5.jpg' width={133} height={112} />
              <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
              <div className={s.cardInfo}>
                <div className={s.cardPrice}>
                  <span>ЦЕНА:</span> <br />
                  <b>12 999 руб.</b>
                </div>
                <button className={s.button}>
                  <img src='/img/plus.svg' width={11} />
                </button>
              </div>
            </div>
          </div>

          <div className={s.card}>
            <div className={s.cardWrapper}>
              <img className={s.cardImage} src='/img/sneakers/6.jpg' width={133} height={112} />
              <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
              <div className={s.cardInfo}>
                <div className={s.cardPrice}>
                  <span>ЦЕНА:</span> <br />
                  <b>12 999 руб.</b>
                </div>
                <button className={s.button}>
                  <img src='/img/plus.svg' width={11} />
                </button>
              </div>
            </div>
          </div>
        </div>






      </div>
    </div >
  );
}

export default App;
