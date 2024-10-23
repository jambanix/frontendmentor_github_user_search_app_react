import { useTheme } from "../../context/ThemeProvider"


export const UserBasics = ({name, login, created_at, avatar_url}) => {

    const {theme} = useTheme();
    const profileImgClass = "rounded-full w-[70px] h-[70px] lg:w-[117px] lg:h-[117px]";

    return (
        <div className="grid col-span-2 items-center gap-12 grid-cols-2 lg:grid-cols[25%_75%]">
            <div className={profileImgClass}>
                <img src={avatar_url || "/src/assets/github-mark.png"} alt={`profile of ${name}`} className={`${profileImgClass} object-center`}/>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:col-start-2">
                <div className="flex flex-col">
                    <h1 className={`${theme === "dark" ? "text-white" : "text-black"}`}>{name}</h1>
                    <h4 className="text-blue">@{login}</h4>
                </div>
                <h4>Joined {created_at}</h4>
            </div>
        </div>
    )
}