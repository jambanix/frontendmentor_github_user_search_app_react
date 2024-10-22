

export const PageContainer = ({children}) => {
    return (
        <main>
            <div className="flex flex-center items-center w-full h-screen justify-center">
                <div className="flex-flex-col w-full md:w-4/5 lg:w-3/5 max-w-[800px]">
                    {children}
                </div>
            </div>
        </main>
    )
}