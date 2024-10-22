import { ThemeToggler } from "../ThemeToggler"
import { Logo } from "./Logo"

export const Header = () => {
    return (
        <header className="flex justify-between items-center">
            <Logo>devfinder</Logo>
            <ThemeToggler />
        </header>
    )
}