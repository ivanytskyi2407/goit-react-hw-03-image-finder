import { Component } from 'react';
import s from './ImageGalleryItem.module.css';
// import NewPixabayAPI from '../API/API';

// const pixabayAPI = new NewPixabayAPI();

export default class ImageGalleryItem extends Component {
  state = {
    query: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      // pixabayAPI.searchQuery = this.props.query;
      // const query = pixabayAPI.axiosPicture();
      // this.setState({ query });
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?key=25715337-58cde3c0d1b1902de73779f35&q=${this.props.query}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=12`
      )
        .then(data => data.json())
        .then(query => this.setState({ query: query.hits }))
        .finally(() => {
          this.setState({ loading: false });
        });
    }
    console.log(this.state.query);
  }
  render() {
    const { query } = this.state;
    return (
      <>
        {this.state.loading && <div>LOADING</div>}
        {query &&
          query.map(({ id, webformatURL, tags }) => {
            return (
              <li key={id} className={s.ImageGalleryItem}>
                <img
                  src={webformatURL}
                  alt={tags}
                  className={s.ImageGalleryItemImage}
                />
              </li>
            );
          })}
      </>
    );
  }
}
