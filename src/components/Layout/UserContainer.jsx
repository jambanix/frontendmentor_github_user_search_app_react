import { useTheme } from "../../context/ThemeProvider"
import { UserBasics } from "../User/UserBasics";
import { UserDescription } from "../User/UserDescription";
import { UserSocials } from "../User/UserSocials";
import { UserStats } from "../User/UserStats";

export const UserContainer= () => {

    const {theme} = useTheme();

    return (
        <article className={`grid w-full rounded-lg p-8 ${theme === "dark" ? "bg-dark-body" : "bg-light-body"}`}>
            <UserBasics />
            <UserDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sapiente corrupti consectetur doloribus voluptas consequatur, tempora est consequuntur. Unde accusantium numquam quibusdam nobis rerum natus quidem iure ratione a eos earum quia laudantium impedit quas dolor ipsam in dignissimos aliquid, laboriosam nemo voluptatum? Labore ipsum dolore eum placeat ut laborum facilis blanditiis quae vitae, corporis dignissimos amet aperiam.</UserDescription>
            <UserStats />
            <UserSocials />
        </article>
    )
}