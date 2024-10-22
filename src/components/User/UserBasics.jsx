

export const UserBasics = () => {
    return (
        <div className="flex items-center">
            <div className="userImg rounded-full w-[70px] h-[70px] lg:w-[117px] lg:h-[117px] bg-red-300"></div>
            <div className="userText flex-col gap-4">
                <h1>The Octocat</h1>
                <h4>@octocat</h4>
                <h4>Joined 25 Jan 2011</h4>
            </div>
        </div>
    )
}