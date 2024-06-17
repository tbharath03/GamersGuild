import React, { useCallback, useEffect, useState } from "react";
import GenreList from "../components/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../components/Banner";
import TrendingGames from "../components/TrendingGames";
import GamesByGenreId from "../components/GamesByGenreId";
import SearchedResults from "../components/SearchedResults";
import { IoReorderThreeOutline } from "react-icons/io5";

const Home = ({ searchedGames, toggleHandler, toggle }) => {
    const [gamesList, setGamesList] = useState([]);
    const [gameListByGenreId, setGameListByGenreId] = useState([]);
    const [selectedGenresName, setSelectedGenresName] = useState("Action");
    const [sidebar, setSideBar] = useState(false);
    useEffect(() => {
        getAllGamesList();
        getGameListByGenreId(4);
    }, []);
    const getAllGamesList = () => {
        GlobalApi.getAllGames.then((resp) => {
            setGamesList(resp.data.results);
        });
    };

    const getGameListByGenreId = (id) => {
        GlobalApi.getGameListByGenreId(id).then((resp) => {
            setGameListByGenreId(resp.data.results);
        });
    };

    return (
        <div className="flex gap-0">
            <div className="h-full md:hidden">
                <div>
                    <IoReorderThreeOutline
                        className="h-[40px] w-[40px] dark:text-white"
                        onClick={() => {
                            setSideBar(!sidebar);
                        }}
                    />
                </div>
            </div>
            <div className="grid grid-cols-4 px-8">
                <div className="h-full hidden md:block">
                    <GenreList
                        setToZero={() => {
                            toggleHandler(false);
                        }}
                        genreId={(genresId) => getGameListByGenreId(genresId)}
                        selectedGenresName={(name) =>
                            setSelectedGenresName(name)
                        }
                    />
                </div>
                <div className="z-0 col-span-4 md:col-span-3 pr-20">
                    {sidebar && (
                        <div className="absolute dark:bg-[#111] rounded-lg shadow-xl shadow-slate-800 h-fit p-2 m-0 block z-10 md:hidden">
                            <GenreList
                                setToZero={() => {
                                    toggleHandler(false);
                                    setSideBar(!sidebar);
                                }}
                                genreId={(genresId) =>
                                    getGameListByGenreId(genresId)
                                }
                                selectedGenresName={(name) =>
                                    setSelectedGenresName(name)
                                }
                            />
                        </div>
                    )}
                    {searchedGames.length != 0 && toggle ? (
                        <SearchedResults searchedGames={searchedGames} />
                    ) : (
                        gamesList.length &&
                        gameListByGenreId.length && (
                            <div>
                                <Banner gameBanner={gameListByGenreId[0]} />
                                <TrendingGames gamesList={gamesList} />
                                {gameListByGenreId.length && (
                                    <GamesByGenreId
                                        gamesList={gameListByGenreId}
                                        name={selectedGenresName}
                                        setToOne={() => {
                                            setToggle(true);
                                        }}
                                    />
                                )}
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
