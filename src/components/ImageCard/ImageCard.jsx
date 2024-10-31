const ImageCard = ({
  item: {
    urls: { small, regular },
    alt_description,
  },
  openModal,
}) => {
  return (
    <div>
      <img
        onClick={() => openModal(alt_description, regular)}
        src={small}
        alt={alt_description}
      />
    </div>
  );
};

export default ImageCard;
