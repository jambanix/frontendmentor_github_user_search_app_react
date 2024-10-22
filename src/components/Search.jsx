import { useTheme } from "../context/ThemeProvider"
import { Button } from "./Button"
import { Icon } from "./Icons/Icon";

export const Search = () => {

    const {theme} = useTheme();

    return (
        <div className="flex relative items-center">
            <input type="text" placeholder="Search Github Username" className={`basis-full rounded-lg px-16 py-5 ${theme === "dark" ? "bg-dark-body" : "bg-light-body"}`}/>
            <Icon containerClassName="absolute left-6" iconType="search"/>
            <Button className="absolute right-2 bg-blue py-3 px-6 text-white">Search</Button>
        </div>
    )
}