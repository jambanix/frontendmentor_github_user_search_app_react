import { useTheme } from "../../context/ThemeProvider"


export const UserStats = ({public_repos, followers, following}) => {

    const {theme} = useTheme();

    return (
        <article className={`flex justify-evenly p-4 rounded-xl ${theme === "dark" ? "bg-dark-main" : "bg-light-main"}`}>
            <div className="flex-col">
                <p>Repos</p>
                <p>{public_repos}</p>
            </div>
            <div className="flex-col">
                <p>Followers</p>
                <p>{followers}</p>
            </div>
            <div className="flex-col">
                <p>Following</p>
                <p>{following}</p>
            </div>
        </article>
    )
}