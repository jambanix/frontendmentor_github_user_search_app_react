import { Icon } from "../Icons/Icon";

export const UserSocials = ({location, html_url, twitter_username, company}) => {
  return (
    <article className="grid sm:grid-cols-2">
      <div className="flex">
        <Icon iconType="location" />
        <p>{location}</p>
      </div>
      <div className="flex">
        <Icon iconType="website" />
        <p><a href={html_url}>{html_url}</a></p>
      </div>
      <div className="flex">
        <Icon iconType="twitter" />
        <p>{twitter_username}</p>
      </div>
      <div className="flex">
        <Icon iconType="work" />
        <p>{company}</p>
      </div>
    </article>
  );
};
