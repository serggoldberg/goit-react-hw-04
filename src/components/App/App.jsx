import { useState, useEffect } from "react";
import { fetchPhotos } from "../services/api";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoader(true);
      const data = await fetchPhotos();
      setPhotos(data.results);
      setLoader(false);
    };
    getData();
  }, []);

  return (
    <>
      <SearchBar />
      <ImageGallery photos={photos} />
      {loader && <Loader />}
    </>
  );
};

export default App;
