import "./App.css";
import { ThemeContext } from "./Context/ThemeContext";
import Home from "./Pages/Home";
import Header from "./components/Header";
import { useCallback, useEffect, useState } from "react";

function App() {
    const [theme, setTheme] = useState("dark");
    const [searchedGames, setSearchedGames] = useState([]);
    const [toggle, setToggle] = useState(true);
    useEffect(() => {
        setTheme(
            localStorage.getItem("theme")
                ? localStorage.getItem("theme")
                : "dark"
        );
    }, []);

    const setSearchQuery = useCallback((input) => {
        setSearchedGames(input);
    }, []);

    const toggleHandler = useCallback((input) => {
        setToggle(input);
    });

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div
                className={`pb-10 ${theme} ${
                    theme == "dark" ? "bg-[#121212]" : "bg-[#f0f0f0]"
                }`}
            >
                <Header
                    onQuery={setSearchQuery}
                    toggleHandler={toggleHandler}
                    toggle={toggle}
                />
                <Home
                    searchedGames={searchedGames}
                    toggleHandler={toggleHandler}
                    toggle={toggle}
                />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
