import { useState } from "react";
import { useEffect } from "react";
import { fetchPhotos } from "../services/api";
import ImageGallery from "../ImageGallery/ImageGallery";

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
    <div>
      <ImageGallery photos={photos} />
    </div>
  );
};

export default App;
