export const UserAvatar = ({ avatar_url, name, className }) => {
  return (
    <div
      className={`flex items-center justify-center rounded-full w-[70px] h-[70px] sm:w-[110px] sm:h-[110px] ${className}`}
    >
      {avatar_url ? (
        <img
          src={avatar_url}
          alt={`image of ${name}`}
          className="rounded-full w-[70px] h-[70px] sm:w-[110px] sm:h-[110px]"
        />
      ) : null}
    </div>
  );
};
