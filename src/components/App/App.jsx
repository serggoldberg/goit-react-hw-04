import { useState, useEffect } from "react";
import { fetchPhotos } from "../services/api";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [modalWindow, setModalWindow] = useState(false);
  const [targetPhoto, setTargetPhoto] = useState({ alt: "", url: "" });

  useEffect(() => {
    const getData = async () => {
      if (query) {
        setLoader(true);
        try {
          const data = await fetchPhotos(query, page);
          setPhotos((prev) =>
            page === 1 ? data.results : [...prev, ...data.results]
          );
        } catch {
          setError(true);
        } finally {
          setLoader(false);
        }
      }
    };
    getData();
  }, [query, page]);

  const handleSearch = (query) => {
    setQuery(query);
    setPage(1);
    setPhotos([]);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleOpenModal = (alt, url) => {
    setTargetPhoto({ alt, url });
    setModalWindow(true);
  };

  const handleCloseModal = () => {
    setModalWindow(false);
    setTargetPhoto({ alt: "", url: "" });
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage />}
      {photos.length > 0 && (
        <ImageGallery photos={photos} openModal={handleOpenModal} />
      )}
      {loader && <Loader />}
      {photos.length > 0 && !loader && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal
        isModalOpen={modalWindow}
        closeModal={handleCloseModal}
        targetPhoto={targetPhoto}
      />
    </>
  );
};

export default App;
