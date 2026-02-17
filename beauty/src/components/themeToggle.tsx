import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle(){
    const [theme, setTheme] = useState("light");


    useEffect(() => { 
        if (theme === "dark") { document.documentElement.classList.add("dark"); } 
        else { document.documentElement.classList.remove("dark"); } }, [theme]); 
        const toggleTheme = () => { setTheme(theme === "light" ? "dark" : "light"); };

    return ( 
    <button onClick={toggleTheme} className="relative w-14 h-10 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300" > 
    <div className={`absolute w-6 h-6 bg-white dark:bg-black rounded-full flex items-center justify-center transform transition-transform duration-300 ${ theme === "light" ? "translate-x-0" : "translate-x-6" }`} > 
    {theme === "light" ? ( <FaSun className="text-yellow-500 " /> ) : ( <FaMoon className="text-blue-400" /> )} </div> </button> );
}
