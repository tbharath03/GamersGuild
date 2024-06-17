import axios from "axios";

const key = "46ceafc287834a9483162d4ea14ca8a1";
const axiosCreate = axios.create({
    baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosCreate.get(`/genres?key=${key}`);
const getAllGames = axiosCreate.get(`/games?key=${key}`);
const searchAllGames = (input) =>
    axiosCreate.get(`/games?key=${key}&search=${input}`);
const getGameListByGenreId = (id) =>
    axiosCreate.get(`/games?key=${key}&genres=${id}`);
export default {
    getGenreList,
    getAllGames,
    getGameListByGenreId,
    searchAllGames,
};
