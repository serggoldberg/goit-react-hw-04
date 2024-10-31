import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ photos, openModal }) => {
  return (
    <ul>
      {photos.map((item) => (
        <li key={item.id}>
          <ImageCard item={item} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
