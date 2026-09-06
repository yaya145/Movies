"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, ThemeProvider } from "@teispace/next-themes"

export default function Providers({children}: {children: React.ReactNode}) {
 return(
    <ThemeProvider attribute="class" defaultTheme="system">
        <div className="text-gray-700 dark:bg-gray-700 min-h-screen 
        select-none transition-colors duration-300">
            {children}
        </div>
    </ThemeProvider>
 )
}