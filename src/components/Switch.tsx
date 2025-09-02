import { Sun, Moon } from "lucide-react"
import { Button } from "./ui/button"
import { useTheme } from "next-themes"

export default function Switch() {

    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <Button variant={"outline"} size={"icon"} onClick={toggleTheme} className={`rounded ${theme == 'light' ? 'bg-amber-200' : 'bg-blue-950 '} transition-colors`}>
            {theme === 'light' ? <Sun className="stroke-amber-500" /> : <Moon className="stroke-slate-200" />}
            <span className="sr-only">Toggle Theme</span>
        </Button>
    )
}