import { Icon } from "../Icons/Icon"
import { useTheme } from "../../context/ThemeProvider";

export const UserSocial = ({type, data}) => {

    const IconType = () => <Icon iconType={type} />
    const {theme} = useTheme();

    return (
        <div className="flex gap-4">
            <IconType/>
            <p className={`${theme === "dark" ? "text-ivory": "text-black"}`}>{data ? (type === "website" ? <a href={data}>{data}</a> : data): "Not available"}</p>
        </div>
    )
}