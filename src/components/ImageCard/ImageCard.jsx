const ImageCard = ({
  item: {
    urls: { small, regular },
    alt_description,
  },
}) => {
  return (
    <div>
      <img src={small} alt={alt_description} />
    </div>
  );
};

export default ImageCard;
