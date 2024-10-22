import { useTheme } from "../../context/ThemeProvider"


export const PageContainer = ({children}) => {

    const {theme} = useTheme();

    console.log(theme);

    return (
        <main>
            <div className={`flex flex-center items-center w-full h-screen justify-center ${theme === "dark" ? "bg-dark-main" : "bg-light-main"}`}>
                <div className="flex flex-col gap-12 items-center justify-center h-full max-w-[800px]">
                    {children}
                </div>
            </div>
        </main>
    )
}