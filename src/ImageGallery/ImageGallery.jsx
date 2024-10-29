const ImageGallery = ({ photos }) => {
  return (
    <ul>
      {photos.map((item) => (
        <li key={item.id}>
          <ImageCard url={item.urls} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
