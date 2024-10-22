import { useTheme } from "../../context/ThemeProvider"
import { MoonIcon } from "./Variations/MoonIcon";
import { SearchIcon } from "./Variations/SearchIcon";
import { SunIcon } from "./Variations/SunIcon";

export const Icon = ({containerClassName=null, iconType="search"}) => {

    const {theme} = useTheme();


    switch (iconType) {
        case "search":
            return (<SearchIcon containerClassName={containerClassName}/>);
        case "sun":
            return (<SunIcon containerClassName={containerClassName}/>);
        case "moon":
            return (<MoonIcon containerClassName={containerClassName}/>);
    }
}