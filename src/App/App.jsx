import { useState } from "react";
import { useEffect } from "react";
import { fetchPhotos } from "../services/api";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";

const App = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchPhotos();
      setPhotos(data.results);
    };
    getData();
  }, []);

  return (
    <>
      <SearchBar />
      <ImageGallery photos={photos} />
    </>
  );
};

export default App;
