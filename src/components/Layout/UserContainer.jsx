import { useTheme } from "../../context/ThemeProvider"
import { UserBasics } from "../User/UserBasics";
import { UserDescription } from "../User/UserDescription";
import { UserSocials } from "../User/UserSocials";
import { UserStats } from "../User/UserStats";

export const UserContainer= ({user}) => {

    const {theme} = useTheme();

    return (
        <article className={`grid w-full rounded-lg p-8 ${theme === "dark" ? "bg-dark-body" : "bg-light-body"}`}>
            <UserBasics {...user} />
            <UserDescription >{user.bio}</UserDescription>
            <UserStats {...user}/>
            <UserSocials {...user}/>
        </article>
    )
}