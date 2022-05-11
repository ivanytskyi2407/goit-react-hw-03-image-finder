import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ pictures }) {
  return pictures.map(({ id, webformatURL, tags }) => {
    return (
      <li key={id} className={s.ImageGalleryItem}>
        <img
          src={webformatURL}
          alt={tags}
          className={s.ImageGalleryItemImage}
        />
      </li>
    );
  });
}
