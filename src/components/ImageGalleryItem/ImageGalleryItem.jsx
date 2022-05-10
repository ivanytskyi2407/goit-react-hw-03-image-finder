import { Component } from 'react';
import s from './ImageGalleryItem.module.css';
import NewPixabayAPI from '../API/API';

const pixabayAPI = new NewPixabayAPI();

export default class ImageGalleryItem extends Component {
  state = {
    query: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      // pixabayAPI.searchQuery = this.props.query;
      // const query = pixabayAPI.axiosPicture();
      // this.setState({ query });

      fetch(
        `https://pixabay.com/api/?key=25715337-58cde3c0d1b1902de73779f35&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=12`
      )
        .then(data => data.json())
        .then(query => this.setState({ query: query.hits }));
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
