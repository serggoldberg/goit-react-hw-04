import axios from "axios";

const ACCESS_KEY = "y6ETLvtKSwylkbMXvB80UuNskrAw9jqwIr - SvmbEDnY";

export const fetchPhotos = async (query, currentPage) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}&page=${currentPage}`,
    {
      params: {
        per_page: 15,
      },
    }
  );
  return data.results;
};
