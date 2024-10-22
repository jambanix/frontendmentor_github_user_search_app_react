import { useTheme } from "../../context/ThemeProvider";

export const Logo = ({ children }) => {
  const { theme } = useTheme();

  return <h2 className={`${theme === "dark" ? "text-white" : "text-black"}`}>{children}</h2>;
};
