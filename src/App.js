import './null.scss'
import s from './App.module.scss'

function App() {
  return (
    <div className={s.wrapper}>
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
        <h1>Все кроссовки</h1>
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
                  <img src='/img/plus.svg' width={11} />
                </button>
              </div>
            </div>
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
    </div>
  );
}

export default App;
