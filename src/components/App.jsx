import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import s from './App.module.css';
import Button from './Button/Button';

export default class App extends Component {
  state = {
    query: '',
    page: 1,
    loadMore: true,
  };

  handlFormSubmit = query => {
    this.setState({ query });
  };
  onClickButton = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };
  showLoadMore = () => {
    this.setState({ loadMore: true });
  };

  render() {
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.handlFormSubmit} />
        <ImageGallery
          query={this.state.query}
          page={this.state.page}
          loadMore={this.showLoadMore}
        />
        {this.state.loadMore && <Button onClickButton={this.onClickButton} />}
        <ToastContainer autoClose={2000} position="top-center" />
      </div>
    );
  }
}
