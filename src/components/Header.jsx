import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/images/GG_logo.png";
import { HiOutlineMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";
import GlobalApi from "../Services/GlobalApi";

const Header = ({ onQuery, toggleHandler }) => {
    const { theme, setTheme } = useContext(ThemeContext);
    const [input, setInput] = useState("");

    const changeHandler = (e) => {
        setInput(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        toggleHandler(true);
        GlobalApi.searchAllGames(input).then((resp) => {
            if (input != "") onQuery(resp.data.results);
            else onQuery([]);
        });
    };

    return (
        <div className="flex items-center p-3">
            <img src={logo} width={60} height={60} />
            <div className="flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full dark:bg-slate-800">
                <HiOutlineMagnifyingGlass className="dark:text-white" />
                <form onSubmit={submitHandler} className="w-full">
                    <input
                        onChange={changeHandler}
                        type="text"
                        placeholder="Search Games"
                        className="px-2 bg-transparent outline-none dark:text-white w-full"
                    />
                </form>
            </div>
            <div>
                {theme == "light" ? (
                    <HiMoon
                        className="text-[35px] bg-slate-200 p-1 rounded-full cursor-pointer"
                        onClick={() => {
                            setTheme("dark");
                            localStorage.setItem("theme", "dark");
                        }}
                    />
                ) : (
                    <HiSun
                        className="text-[35px] text-white bg-slate-800 p-1 rounded-full cursor-pointer"
                        onClick={() => {
                            setTheme("light");
                            localStorage.setItem("theme", "light");
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default Header;
