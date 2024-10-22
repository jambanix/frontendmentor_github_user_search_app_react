import { useTheme } from "../context/ThemeProvider"
import { Button } from "./Button"
import { Icon } from "./Icons/Icon";

export const Search = () => {

    const {theme} = useTheme();

    return (
        <div className="flex relative items-center">
            <input type="text" placeholder="Search Github Username" className={`basis-full pl-20 bg-${theme}-body`}/>
            <Icon containerClassName="absolute left-10" iconType="search"/>
            <Button className="absolute right-0 -ml-4">Search</Button>
        </div>
    )
}