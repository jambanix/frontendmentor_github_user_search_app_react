

export const UserBasics = ({name, login, created_at, avatar_url}) => {

    const profileImgClass = "rounded-full w-[70px] h-[70px] lg:w-[117px] lg:h-[117px]"

    return (
        <div className="flex items-center">
            <div className={profileImgClass}>
            <img src={avatar_url || "/src/assets/github-mark.png"} alt={`profile of ${name}`} className={`${profileImgClass} object-center`}/>

            
            </div>
            <div className="userText flex-col gap-4">
                <h1>{name}</h1>
                <h4>{login}</h4>
                <h4>Joined {created_at}</h4>
            </div>
        </div>
    )
}