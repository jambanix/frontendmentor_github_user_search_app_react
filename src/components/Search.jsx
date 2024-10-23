import { useState } from "react";
import { useTheme } from "../context/ThemeProvider"
import { Button } from "./Button"
import { Icon } from "./Icons/Icon";


export const Search = ({callbackFn, error=false}) => {

	const {theme} = useTheme();

    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleEnterKey = (e) => {
        if (e.key === "Enter") callbackFn(search);
    }

    const handleClick = () => {
        callbackFn(search);
    }

    return (
        <div className="flex relative items-center">
            <input type="text" placeholder="Search Github username..." onKeyDown={(e) => handleEnterKey(e)}onChange={(e) => handleChange(e)} className={`basis-full w-full rounded-lg px-16 py-5 ${theme === "dark" ? "bg-dark-body text-ivory" : "bg-light-body text-grey"}`}/>
            <Icon containerClassName="absolute left-6" iconType="search"/>
            <p className={`absolute right-32 transition-opacity text-red-500 ${error ? "visible opacity-100" : "invisible opacity-0"}`}>No results</p>
            <Button className="font-bold absolute right-2 bg-blue py-3 px-6 text-white hover:bg-light-blue" onClick={handleClick}>Search</Button>
        </div>
    )
}