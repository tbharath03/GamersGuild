import React, { useEffect } from "react";
import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

const GamesByGenreId = ({ gamesList, name }) => {
    const iconMap = {
        pc: <FaWindows />,
        playstation: <FaPlaystation />,
        xbox: <FaXbox />,
        nintendo: <SiNintendo />,
        mac: <FaApple />,
        linux: <FaLinux />,
        ios: <MdPhoneIphone />,
        web: <BsGlobe />,
        andriod: <FaAndroid />,
    };
    return (
        <div>
            <h2 className="font-bold text-[30px] dark:text-white mt-5">
                {name} Games
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                {gamesList.map((item, id) => (
                    <div
                        key={id}
                        className="dark:bg-[#222] p-3 rounded-lg max-h-[400px] min-h-[350px]
                    hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer bg-slate-200"
                    >
                        <img
                            src={item.background_image}
                            className="w-full h-[80%] rounded-xl object-cover"
                        />
                        <div className="flex justify-between p-2">
                            <div className="flex gap-2">
                                {item.parent_platforms.map((platform, id) => (
                                    <div
                                        key={id}
                                        className="text-[#555] text-lg"
                                    >
                                        {iconMap[platform.platform.slug]}
                                    </div>
                                ))}
                            </div>
                            <div
                                className="p-1 rounded-sm ml-2 text-[12px]
                            bg-green-100 text-green-700 font-medium h-fit"
                            >
                                {item.metacritic ? item.metacritic : "66"}
                            </div>
                        </div>
                        <h2 className="text-[20px] dark:text-white font-bold">
                            {item.name}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GamesByGenreId;
