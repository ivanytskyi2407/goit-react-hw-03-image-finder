import { Component } from 'react';
import s from './ImageGalleryItem.module.css';
// import NewPixabayAPI from '../API/API';

// const pixabayAPI = new NewPixabayAPI();

export default class ImageGalleryItem extends Component {
  state = {
    query: null,
    loading: false,
    error: null,
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
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`Помилка завантаження`));
        })
        .then(query => this.setState({ query: query.hits }))
        .catch(error => this.setState({ error }))
        .finally(() => {
          this.setState({ loading: false });
        });
    }
    console.log(this.state.query);
  }
  render() {
    const { query, loading, error } = this.state;
    return (
      <>
        {loading && <div>LOADING</div>}
        {error && <h1>{`Нічого немає по запиту ${this.props.query}`}</h1>}
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
