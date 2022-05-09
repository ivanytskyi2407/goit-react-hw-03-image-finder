// import NewPixabayAPI from '../API/API';
import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import s from './App.module.css';

export default class App extends Component {
  state = {
    query: '',
  };
  handlFormSubmit = query => {
    this.setState({ query });
  };

  render() {
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.handlFormSubmit} />
        <ImageGallery query={this.state.query} />
        <Button />
        <ToastContainer autoClose={2000} position="top-center" />
      </div>
    );
  }
}
