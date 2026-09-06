import Link from "next/link"
import React from "react"
import DarkModeSwitch from './DarkModeSwitch'

export default function Header(): React.JSX.Element {
  return (
    <header className="flex justify-between items-center border-b border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-colors duration-200">

      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto w-full">
        
        <ul className="flex gap-4 items-center">
          <li>
            <Link href={'/sign-in'} className="hover:opacity-80 transition-opacity">Sign in</Link>
          </li>
          <li className="hidden sm:block">
            <Link href={'/'} className="hover:opacity-80 transition-opacity">Home</Link>
          </li>
          <li className="hidden sm:block">
            <Link href={'/about'} className="hover:opacity-80 transition-opacity">About</Link>
          </li>
        </ul>


        <div className="flex items-center gap-4 shrink-0">
          <Link href={'/'} className="flex gap-1 items-center">
            <span className="text-2xl font-bold text-fuchsia-50 bg-fuchsia-600 py-1 px-2 rounded-lg">
              Movies Finder
            </span>
            <span className="text-xl hidden sm:inline opacity-70">Alternative/Clone</span>
          </Link>

          <DarkModeSwitch />
        </div>

      </div>
    </header>
  )
}

