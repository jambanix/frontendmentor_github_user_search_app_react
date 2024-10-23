import { useTheme } from "../context/ThemeProvider"
import { Icon } from "./Icons/Icon";


export const ThemeToggler = () => {

    const {theme, toggleTheme} = useTheme();
    const title = theme === "dark" ? "light" : "dark"
    const icon = title === "dark" ? "moon" : "sun";

    console.log(theme, title, icon);

    return (
        <div className="flex gap-2 cursor-pointer items-center" onClick={toggleTheme}>
            <h4 className={`${theme === "dark" ? "text-ivory hover:text-grey" : "text-grey hover:text-black"}`}>{title.toUpperCase()}</h4>
            <Icon iconType={icon} />
        </div>
    )
}