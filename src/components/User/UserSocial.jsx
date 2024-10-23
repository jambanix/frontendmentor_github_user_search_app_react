import { Icon } from "../Icons/Icon";
import { useTheme } from "../../context/ThemeProvider";

export const UserSocial = ({ type, data }) => {
  const { theme } = useTheme();
  const available = () => (data ? true : false);
  const IconType = () => <Icon iconType={type} available={available()} />;

  return (
    <div className="flex gap-4">
      <IconType />
      {available() ? (
        <p
          className={`text-sm ${
            theme === "dark" ? "text-ivory" : "text-black"
          }`}
        >
          {type === "website" ? (
            <a className="hover:underline" href={data}>
              {data}
            </a>
          ) : (
            data
          )}
        </p>
      ) : (
        <p className="text-sm text-grey opacity-50">Not available</p>
      )}
    </div>
  );
};
