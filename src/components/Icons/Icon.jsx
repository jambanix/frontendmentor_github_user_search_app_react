import { useTheme } from "../../context/ThemeProvider"
import { LocationIcon } from "./Variations/LocationIcon";
import { MoonIcon } from "./Variations/MoonIcon";
import { SearchIcon } from "./Variations/SearchIcon";
import { SunIcon } from "./Variations/SunIcon";
import { TwitterIcon } from "./Variations/TwitterIcon";
import { WebsiteIcon } from "./Variations/WebsiteIcon";
import { WorkIcon } from "./Variations/WorkIcon";

export const Icon = ({containerClassName=null, iconType="search"}) => {

    const {theme} = useTheme();


    switch (iconType) {
        case "search":
            return (<SearchIcon containerClassName={containerClassName}/>);
        case "sun":
            return (<SunIcon containerClassName={containerClassName}/>);
        case "moon":
            return (<MoonIcon containerClassName={containerClassName}/>);
        case "location":
            return (<LocationIcon containerClassName={containerClassName}/>);
        case "website":
            return (<WebsiteIcon containerClassName={containerClassName}/>);
        case "twitter":
            return (<TwitterIcon containerClassName={containerClassName}/>);
        case "work":
            return (<WorkIcon containerClassName={containerClassName}/>);
    }
}