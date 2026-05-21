import { Link } from 'react-router-dom'
import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'


export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const dark = theme === 'dark'

  const [scrolled, setScrolled] = React.useState(false)
  const [hideOnScroll, setHideOnScroll] = React.useState(false)

  React.useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const updateScroll = () => {
      const currentScrollY = window.scrollY

      // navbar background after scrolling
      setScrolled(currentScrollY > 20)

      // hide navbar on scroll down
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setHideOnScroll(true)
      } else {
        setHideOnScroll(false)
      }

      lastScrollY = currentScrollY
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScroll()
        })

        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        transform
        ${hideOnScroll ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}
        
        ${
          scrolled
            ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl shadow-lg border-transparent'
            : 'bg-transparent border-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Premium Platform
          </Link>

          {/* Menu */}
          <div className="flex items-center gap-3">
            
            <Link
              to="/services"
              className="
                px-4 py-2 rounded-xl
                text-sm font-medium
                text-slate-700 dark:text-slate-200
                hover:bg-slate-100/80
                dark:hover:bg-slate-800/80
                transition-all duration-300
              "
            >
              Services
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="
                p-3 rounded-2xl
                bg-white/60 dark:bg-slate-800/60
                backdrop-blur-xl
                border border-white/20 dark:border-slate-700/50
                hover:scale-105
                hover:bg-white dark:hover:bg-slate-800
                transition-all duration-300
                shadow-md
              "
            >
              {dark ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-slate-700" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}