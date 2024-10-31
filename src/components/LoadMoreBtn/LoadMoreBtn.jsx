const LoadMoreBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ padding: "10px 20px", marginTop: "20px" }}
    >
      Load more
    </button>
  );
};

export default LoadMoreBtn;
