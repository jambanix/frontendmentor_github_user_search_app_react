import { useTheme } from "../../context/ThemeProvider";
import { UserAvatar } from "./UserAvatar";
import { UserSocial } from "./UserSocial";

export const UserContainer = ({ user }) => {
  const { theme } = useTheme();


  return (
    <div
      className={`w-full h-full rounded-lg p-6 md:p-8 gap-8 ${
        theme === "dark" ? "bg-dark-body" : "bg-light-body"
      }`}
    >
      <div className="grid grid-cols-[min-content] sm:grid-cols-[min-content_1fr] gap-6 sm:gap-12">

        <UserAvatar {...user} className="col-start-1" />

        <div className="sm:col-start-2 grid grid-cols-1 sm:grid-cols-2]">
          <div>
            <h1 className={`${theme === "dark" ? "text-white" : "text-black"} col-start-1`}>{user.name}</h1>
            <h4 className="text-blue col-start-1">@{user.login}</h4>
          </div>
          
          <h4 className="sm:col-start-2 sm:flex">Joined {user.created_at}</h4>
        </div>

        <div className="col-span-2 sm:col-start-2 flex flex-col gap-6">

          {/* Bio */}
          <article className="">{user.bio}</article>

          {/* Statistics */}
          <article
            className={`flex justify-evenly p-4 rounded-xl ${
              theme === "dark" ? "bg-dark-main" : "bg-light-main"
            }`}
          >
            <div className="flex-col">
              <p>Repos</p>
              <p>{user.public_repos}</p>
            </div>
            <div className="flex-col">
              <p>Followers</p>
              <p>{user.followers}</p>
            </div>
            <div className="flex-col">
              <p>Following</p>
              <p>{user.following}</p>
            </div>
          </article>

          {/* Socials */}
          <article className={`grid sm:grid-cols-2 gap-4`}>
            <UserSocial type="location" data={user.location} />
            <UserSocial type="website" data={user.html_url} />
            <UserSocial type="twitter" data={user.twitter_username} />
            <UserSocial type="work" data={user.company} />
          </article>
        </div>
      </div>
    </div>
  );
};
