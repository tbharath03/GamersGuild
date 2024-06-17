import React, { useEffect } from "react";

const TrendingGames = ({ gamesList }) => {
    return (
        <div className="mt-5 hidden md:block">
            <h2 className="font-bold text-[30px] dark:text-white">
                Trending Games
            </h2>
            <div className="md:grid md:grid-cols-3 gap-4 mt-5 lg:grid-cols-4">
                {gamesList.map(
                    (item, id) =>
                        id < 4 && (
                            <div
                                key={id}
                                className="bg-[#76a8f723] rounded-lg group
                            hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
                            >
                                <img
                                    src={item.background_image}
                                    className="h-[270px] rounded-t-lg object-cover "
                                />
                                <h2 className="dark:text-white p-2 text-[20px] font-bold">
                                    {item.name}
                                </h2>
                            </div>
                        )
                )}
            </div>
        </div>
    );
};

export default TrendingGames;
