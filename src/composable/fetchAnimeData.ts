const BASE_URL = "https://api.jikan.moe/v4";

const fetchAnimeDataById = (id: any) => {
  fetch(`${BASE_URL}/anime/${id}/full`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
};

const fetchAllData = () => {
  fetch(`${BASE_URL}/top/anime`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.data);
      return data.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export { fetchAnimeDataById, fetchAllData };
