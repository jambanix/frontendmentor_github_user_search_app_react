import { useState } from "react";
import { useTheme } from "../context/ThemeProvider"
import { Button } from "./Button"
import { Icon } from "./Icons/Icon";


export const Search = ({callbackFn}) => {

	const {theme} = useTheme();

    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleClick = () => {
        callbackFn(search);
    }

    return (
        <div className="flex relative items-center">
            <input type="text" placeholder="Search Github Username" onChange={(e) => handleChange(e)} className={`basis-full rounded-lg px-16 py-5 ${theme === "dark" ? "bg-dark-body" : "bg-light-body"}`}/>
            <Icon containerClassName="absolute left-6" iconType="search"/>
            <Button className="absolute right-2 bg-blue py-3 px-6 text-white" onClick={handleClick}>Search</Button>
        </div>
    )
}