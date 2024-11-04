import ImageCard from "../ImageCard/ImageCard"
import styles from "./ImageGallery.module.css"

function ImageGallery({images, openModal}) {
    return (
    <ul className={styles.imgList}>
      {images.map(({ id, description, urls: { small, regular } }) => {
        return (
          <li key={id} className={styles.itemGallery}>
            <ImageCard
              small={small}
              regular={regular}
              description={description}
              openModal={openModal}
            />
          </li>
        );
      })}
      </ul>
    )
}

export default ImageGallery;