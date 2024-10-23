import { useTheme } from "../../context/ThemeProvider";
import { LocationIcon } from "./Variations/LocationIcon";
import { MoonIcon } from "./Variations/MoonIcon";
import { SearchIcon } from "./Variations/SearchIcon";
import { SunIcon } from "./Variations/SunIcon";
import { TwitterIcon } from "./Variations/TwitterIcon";
import { WebsiteIcon } from "./Variations/WebsiteIcon";
import { WorkIcon } from "./Variations/WorkIcon";

export const Icon = ({
  containerClassName = null,
  iconType = "search",
  available = true,
  fill = "#4b6a9b",
  isHovering = false,
}) => {
  !available
    ? (containerClassName = `${containerClassName} opacity-50`)
    : containerClassName;

  const { theme } = useTheme();

  if (isHovering) {
    theme === "dark" ? (fill = "#697c9a") : (fill = "");
  }

  switch (iconType) {
    case "search":
      return <SearchIcon fill={fill} containerClassName={containerClassName} />;
    case "sun":
      return <SunIcon fill={fill} containerClassName={containerClassName} />;
    case "moon":
      return <MoonIcon fill={fill} containerClassName={containerClassName} />;
    case "location":
      return (
        <LocationIcon fill={fill} containerClassName={containerClassName} />
      );
    case "website":
      return (
        <WebsiteIcon fill={fill} containerClassName={containerClassName} />
      );
    case "twitter":
      return (
        <TwitterIcon fill={fill} containerClassName={containerClassName} />
      );
    case "work":
      return <WorkIcon fill={fill} containerClassName={containerClassName} />;
  }
};
