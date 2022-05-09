// import NewPixabayAPI from '../API/API';
import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import s from './App.module.css';

export default class App extends Component {
  // state = {};

  render() {
    return (
      <div className={s.App}>
        <Searchbar></Searchbar>
        <ImageGallery />
        <Button />
      </div>
    );
  }
}
