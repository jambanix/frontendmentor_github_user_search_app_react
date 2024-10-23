import { useTheme } from "../../context/ThemeProvider";
import { UserAvatar } from "./UserAvatar";
import { UserSocial } from "./UserSocial";

export const UserContainer = ({ user }) => {
  const { theme } = useTheme();

  const createdAt = (data) => (data ? `Joined ${data}` : "");
  const username = (data) => (data ? `@${data}` : "");

  return (
    <div
      className={`w-full shadow-lg h-full rounded-lg p-6 md:p-8 gap-8 ${
        theme === "dark" ? "bg-dark-body" : "bg-light-body"
      }`}
    >
      <div className="grid grid-cols-[min-content] sm:grid-cols-[min-content_1fr] gap-6 sm:gap-12">
        <UserAvatar {...user} className={`col-start-1 ${theme === "dark" ? "bg-dark-main" : "bg-light-main"}`} />

        <article className="sm:col-start-2 grid grid-cols-1 sm:grid-cols-2]">
          <div>
            <h1
              className={`text-2xl font-extrabold ${
                theme === "dark" ? "text-white" : "text-black"
              } col-start-1`}
            >
              {user.name}
            </h1>
            <h4 className="text-blue col-start-1">{username(user.login)}</h4>
          </div>

          <h4 className={`sm:col-start-2 sm:flex text-grey`}>
            {createdAt(user.created_at)}
          </h4>
        </article>

        <div className="col-span-2 sm:col-start-2 flex flex-col gap-6">
          {/* Bio */}
          <article className="">
            <p className="text-grey">{user.bio}</p>
          </article>

          {/* Statistics */}
          <article
            className={`flex flex-cols justify-around p-4 rounded-xl [&_.heading]:text-sm [&_.stat]:font-bold [&_.stat]:text-2xl ${
              theme === "dark"
                ? "bg-dark-main [&_.stat]:text-white [&_.heading]:text-ivory "
                : "bg-light-main [&_.heading]:text-grey"
            } `}
          >
            <div className="flex-col">
              <p className="heading">Repos</p>
              <p className="stat">{user.public_repos}</p>
            </div>
            <div className="flex-col">
              <p className="heading">Followers</p>
              <p className="stat">{user.followers}</p>
            </div>
            <div className="flex-col">
              <p className="heading">Following</p>
              <p className="stat">{user.following}</p>
            </div>
          </article>

          {/* Socials */}
          <article className={`grid sm:grid-cols-2 gap-4`}>
            <UserSocial type="location" data={user.location} />
            <UserSocial type="twitter" data={user.twitter_username} />
            <UserSocial type="website" data={user.html_url} />
            <UserSocial type="work" data={user.company} />
          </article>
        </div>
      </div>
    </div>
  );
};
