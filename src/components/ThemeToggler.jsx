import { useTheme } from "../context/ThemeProvider"
import { Icon } from "./Icons/Icon";


export const ThemeToggler = () => {

    const {theme, toggleTheme} = useTheme();
    const title = theme === "dark" ? "light" : "dark"
    const icon = title === "dark" ? "sun" : "moon";

    console.log(theme);

    return (
        <div className="flex gap-2 cursor-pointer" onClick={toggleTheme}>
            <h4>{title.toUpperCase()}</h4>
            <Icon iconType={icon} />
        </div>
    )
}