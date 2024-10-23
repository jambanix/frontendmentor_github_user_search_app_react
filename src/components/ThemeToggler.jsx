import { useState } from "react";
import { useTheme } from "../context/ThemeProvider";
import { Icon } from "./Icons/Icon";

export const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();
  const title = theme === "dark" ? "light" : "dark";
  const icon = title === "dark" ? "moon" : "sun";
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="flex gap-2 cursor-pointer items-center"
      onClick={toggleTheme}
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <h4
        className={`${
          theme === "dark"
            ? "text-ivory hover:text-grey"
            : "text-grey hover:text-black"
        } text-sm`}
      >
        {title.toUpperCase()}
      </h4>
      <Icon iconType={icon} isHovering={isHovering} />
    </div>
  );
};
