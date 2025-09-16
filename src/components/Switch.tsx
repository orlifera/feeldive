"use client"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export default function Switch() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    if (!mounted) {
        // Prevents SSR/CSR mismatch — render a placeholder
        return (
            <Button variant="outline" size="icon" disabled>
                <span className="sr-only">Toggle Theme</span>
            </Button>
        )
    }

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className={`rounded ${theme === "light" ? "bg-amber-200" : "bg-blue-950"} transition-colors`}
        >
            {theme === "light" ? (
                <Sun className="stroke-amber-500" />
            ) : (
                <Moon className="stroke-slate-200" />
            )}
            <span className="sr-only">Toggle Theme</span>
        </Button>
    )
}
