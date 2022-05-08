import NewPixabayAPI from '../API/API';
import Searchbar from './Searchbar/Searchbar';
import s from './App.module.css';

export const App = () => {
  // state = {};

  return (
    <div className={s.App}>
      <Searchbar></Searchbar>
    </div>
  );
};
