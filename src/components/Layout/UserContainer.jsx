import { useTheme } from "../../context/ThemeProvider"

export const UserContainer= () => {

    const {theme} = useTheme();

    return (
        <div className={`grid w-full h-44 rounded-lg ${theme === "dark" ? "bg-dark-body" : "bg-light-body"}`}>
            
        </div>
    )
}