import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ photos }) => {
  return (
    <ul>
      {photos.length > 0 ? (
        photos.map((item) => (
          <li key={item.id}>
            <div>
              <ImageCard item={item} />
            </div>
          </li>
        ))
      ) : (
        <p>No images found.</p>
      )}
    </ul>
  );
};

export default ImageGallery;
