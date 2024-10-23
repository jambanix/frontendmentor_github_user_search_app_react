import { useTheme } from "../../context/ThemeProvider";
import { UserAvatar } from "./UserAvatar";
import { UserSocial } from "./UserSocial";

export const UserContainer = ({ user }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`w-full h-full rounded-lg p-8 gap-8 ${
        theme === "dark" ? "bg-dark-body" : "bg-light-body"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-[150px_auto] gap-6">
        <article className="">
          <UserAvatar {...user} className="md:col-start-1" />
        </article>

        <article className="md:col-start-2 flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col">
            <h1 className={`${theme === "dark" ? "text-white" : "text-black"}`}>
              {user.name}
            </h1>
            <h4 className="text-blue">@{user.login}</h4>
          </div>
          <h4 className="flex-grow justify-self-end">Joined {user.created_at}</h4>
        </article>

        <article className="col-span-2 md:col-start-2">{user.bio}</article>

        <article
          className={`flex justify-evenly p-4 rounded-xl col-span-2 md:col-start-2 ${
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

        <article
          className={`grid sm:grid-cols-2 gap-4 col-span-2 md:col-start-2`}
        >
          <UserSocial type="location" data={user.location} />
          <UserSocial type="website" data={user.html_url} />
          <UserSocial type="twitter" data={user.twitter_username} />
          <UserSocial type="work" data={user.company} />
        </article>
      </div>
    </div>
  );
};
