import { Component } from 'react';
import s from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  // state = {};

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      console.log('12');
    }
  }
  render() {
    return (
      <li className={s.ImageGalleryItem}>
        <img src="#" alt="#" className={s.ImageGalleryItemImage} />
      </li>
    );
  }
}
