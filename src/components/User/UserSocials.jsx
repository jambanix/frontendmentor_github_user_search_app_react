import { Icon } from "../Icons/Icon";

export const UserSocials = () => {
  return (
    <article className="grid">
      <div className="flex">
        <Icon iconType="location" />
        <p>San Francisco</p>
      </div>
      <div className="flex">
        <Icon iconType="website" />
        <p>https://github.blog</p>
      </div>
      <div className="flex">
        <Icon iconType="twitter" />
        <p>Not available</p>
      </div>
      <div className="flex">
        <Icon iconType="work" />
        <p>@github</p>
      </div>
    </article>
  );
};
