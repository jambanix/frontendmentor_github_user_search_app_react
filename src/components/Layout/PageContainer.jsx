import { useTheme } from "../../context/ThemeProvider"


export const PageContainer = ({children}) => {

    const {theme} = useTheme();

    console.log(theme);

    return (
        <main>
            <div className={`flex flex-center w-full h-screen py-14 justify-center ${theme === "dark" ? "bg-dark-main" : "bg-light-main"}`}>
                <div className="flex flex-col gap-8 items-center justify-center h-full w-full max-w-[800px] p-6">
                    {children}
                </div>
            </div>
        </main>
    )
}