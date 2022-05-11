import s from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import API from '../API/API';

export default class ImageGallery extends Component {
  state = {
    pictures: [],
    error: null,
    status: 'idle',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ status: 'pending' });
      API(this.props.query, this.state.page)
        .then(pictures => {
          this.setState({ pictures, status: 'resolved' });
          if (pictures.length === 0) {
            return alert('нічого немає');
          }
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { pictures, status } = this.state;

    if (status === 'idle') {
      return;
    }
    if (status === 'pending') {
      return <div>LOADING</div>;
    }

    if (status === 'rejected') {
      return <h1>{`Нічого немає по запиту ${this.props.query}`}</h1>;
    }
    if (status === 'resolved') {
      return (
        <ul className={s.ImageGallery}>
          <ImageGalleryItem pictures={pictures} />;
        </ul>
      );
    }
  }
}
