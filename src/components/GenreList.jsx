import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

const GenreList = ({ genreId, selectedGenresName, setToZero }) => {
    const [genreList, setGenreList] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        getGenreList();
    }, []);
    const getGenreList = () => {
        GlobalApi.getGenreList.then((resp) => {
            setGenreList(resp.data.results);
        });
    };
    return (
        <div>
            <h2 className="text-[30px] font-bold dark:text-white">Genres</h2>
            {genreList.map((item, id) => (
                <div
                    key={id}
                    onClick={() => {
                        setToZero();
                        setActiveIndex(id);
                        genreId(item.id);
                        selectedGenresName(item.name);
                    }}
                    className={`flex gap-2 items-center mb-2 cursor-pointer
                hover:bg-gray-300 p-2 group rounded-lg hover:dark:bg-gray-600 w-8/12
                ${activeIndex == id ? "bg-gray-300 dark:bg-[#222]" : null}`}
                >
                    <img
                        src={item.image_background}
                        className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105
                        transition-all ease-out duration-300 
                        ${activeIndex == id ? "scale-105" : null}`}
                    />
                    <h3
                        className={`dark:text-white text-[18px] group-hover:font-bold transition-all
                    ease-out duration-300
                    ${activeIndex == id ? "font-bold" : null}`}
                    >
                        {item.name}
                    </h3>
                </div>
            ))}
        </div>
    );
};

export default GenreList;
