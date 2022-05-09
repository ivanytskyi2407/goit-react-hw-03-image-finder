import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
const ImageGallery = ({ query }) => {
  return (
    <ul className={s.ImageGallery}>
      <ImageGalleryItem query={query} />
    </ul>
  );
};
export default ImageGallery;
