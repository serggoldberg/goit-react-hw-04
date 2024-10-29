import axios from "axios";

export const fetchPhotos = async (query, currentPage) => {
  const { data } = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      client_id: "y6ETLvtKSwylkbMXvB80UuNskrAw9jqwIr-SvmbEDnY",
      query: query,
      page: currentPage,
      per_page: 10,
    },
  });
  return data.results;
};
