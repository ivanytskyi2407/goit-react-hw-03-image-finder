import s from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import API from '../API/API';
import Modal from '../Modal/Modal';
import { Loader } from '../Loader/Loader';

export default class ImageGallery extends Component {
  state = {
    pictures: [],
    error: null,
    status: 'idle',
    page: 1,
    showModal: false,
    largeImageURL: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ status: 'pending' });
      API(this.props.query, this.state.page)
        .then(pictures => {
          this.setState({
            pictures,

            status: 'resolved',
          });
          if (pictures.length === 0) {
            return alert('нічого немає');
          }
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.setState({ showModal: false });
    }
  };

  handleModal = largeImageURL => {
    this.setState({
      showModal: !this.state.showModal,
      largeImageURL: largeImageURL,
    });
  };

  closeModal = e => {
    console.log(e.code);
    if (e.target === e.currentTarget) {
      this.setState({ showModal: false });
    }
  };

  render() {
    const { pictures, status, showModal } = this.state;

    if (status === 'idle') {
      return;
    }
    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <h1>{`Нічого немає по запиту ${this.props.query}`}</h1>;
    }
    if (status === 'resolved') {
      return (
        <ul className={s.ImageGallery}>
          <ImageGalleryItem pictures={pictures} showModal={this.handleModal} />
          {showModal && (
            <Modal
              bigPicture={this.state.largeImageURL}
              closeModal={this.closeModal}
            />
          )}
        </ul>
      );
    }
  }
}
