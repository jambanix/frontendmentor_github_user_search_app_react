import { ThemeToggler } from "../ThemeToggler"
import { Logo } from "./Logo"

export const Header = () => {
    return (
        <header className="flex justify-between items-center w-full">
            <Logo>devfinder</Logo>
            <ThemeToggler />
        </header>
    )
}