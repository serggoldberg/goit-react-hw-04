import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        "https://api.unsplash.com/search/photos/?client_id=y6ETLvtKSwylkbMXvB80UuNskrAw9jqwIr-SvmbEDnY"
      );
      console.log(data);
      setPhotos(data);
    };
    getData();
  }, []);

  return (
    <div>
      <ul>
        {photos.map((item) => (
          <li key={item.id}>
            <img src={item.urls.small} alt={item.alt_description} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
