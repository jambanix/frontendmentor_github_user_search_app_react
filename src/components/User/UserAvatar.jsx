
export const UserAvatar = ({avatar_url, name, className}) => {
    return (
        <div className={`flex items-center justify-center rounded-full w-[70px] h-[70px] lg:w-[110px] lg:h-[110px] ${className}`}>
            <img src={avatar_url} alt={`image of ${name}`} className="rounded-full w-[70px] h-[70px] lg:w-[110px] lg:h-[110px]" />
        </div>
    )
}