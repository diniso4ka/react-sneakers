import './null.scss'
import s from './App.module.scss'
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Drawer from './components/Drawer/Drawer';


function App() {
  return (
    <div className={s.wrapper}>
      <Drawer />
      <Header />
      <Content />
    </div>

  );
}

export default App;
