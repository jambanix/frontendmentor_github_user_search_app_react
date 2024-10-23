
import { UserSocial } from "./UserSocial";

export const UserSocialsContainer = ({
  location,
  html_url,
  twitter_username,
  company,
}) => {


  return (
    <article
      className={`grid sm:grid-cols-2 gap-4 col-span-2 lg:col-start-2`}
    >
      <UserSocial type="location" data={location} />
      <UserSocial type="website" data={html_url} />
      <UserSocial type="twitter" data={twitter_username} />
      <UserSocial type="work" data={company} />
    </article>
  );
};
