import { useTheme } from "../../context/ThemeProvider"


export const UserStats = () => {

    const {theme} = useTheme();

    return (
        <article className={`flex justify-evenly p-4 rounded-xl ${theme === "dark" ? "bg-dark-main" : "bg-light-main"}`}>
            <div className="flex-col">
                <p>Repos</p>
                <p>8</p>
            </div>
            <div className="flex-col">
                <p>Followers</p>
                <p>3938</p>
            </div>
            <div className="flex-col">
                <p>Following</p>
                <p>9</p>
            </div>
        </article>
    )
}