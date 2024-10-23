import { useTheme } from "../../context/ThemeProvider";

import { UserBasics } from "../User/UserBasics";
import { UserDescription } from "../User/UserDescription";
import { UserSocialsContainer } from "../User/UserSocialsContainer";
import { UserStats } from "../User/UserStats";

export const UserContainer = ({ user }) => {
  const { theme } = useTheme();

  return (
    <article
      className={`w-full h-full grid grid-cols-2 lg:grid-cols-[25%_75%] rounded-lg p-8 gap-8 ${
        theme === "dark" ? "bg-dark-body" : "bg-light-body"
      }`}
    >

      <UserBasics {...user} />
      <UserDescription>{user.bio}</UserDescription>
      <UserStats {...user} />
      <UserSocialsContainer {...user} />
    </article>
  );
};
