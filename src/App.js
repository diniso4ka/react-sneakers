import './null.scss'
import s from './App.module.scss'
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Drawer from './components/Drawer/Drawer';


const cards = [
  { name: 'Мужские Кроссовки Nike Air Max 270', price: '12 999 руб.', img: '/img/sneakers/1.jpg' },
  { name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '6 299 руб.', img: '/img/sneakers/2.jpg' },
  { name: 'Кроссовки Puma X Aka Boku Future Rider', price: '14 999 руб.', img: '/img/sneakers/3.jpg' },
  { name: 'Мужские Кроссовки Under Armour Curry 8', price: '3 999 руб.', img: '/img/sneakers/4.jpg' },
  { name: 'Мужские Кроссовки Nike Kyrie 7', price: '15 399 руб.', img: '/img/sneakers/5.jpg' },
  { name: 'Мужские Кроссовки Nike Lebron XVIII Low', price: '9 699 руб.', img: '/img/sneakers/6.jpg' },
]

function App() {
  return (
    <div className={s.wrapper}>
      <Drawer />
      <Header />
      <Content cards={cards} />
    </div>

  );
}

export default App;
