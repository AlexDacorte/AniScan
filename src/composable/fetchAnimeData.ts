import { mockRemoteAnimeList } from "../mock/mockAnimes";
import type { remoteAnimeType } from "./types";

const BASE_URL = import.meta.env.VITE_BASE_URL;

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
const fetchMockData = (): remoteAnimeType[] => {
  console.log(mockRemoteAnimeList);
  return mockRemoteAnimeList;
};
export { fetchAnimeDataById, fetchAllData, fetchMockData };
