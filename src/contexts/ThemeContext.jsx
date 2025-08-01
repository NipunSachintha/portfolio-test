/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}

export const ThemeProvider = ({ children }) => {
    useEffect(() => {
        // Always apply galaxy theme
        document.documentElement.classList.add('galaxy-theme')
        // Remove any existing theme classes
        document.documentElement.classList.remove('dark', 'light')
    }, [])

    const value = {
        isDarkMode: true, // Always true for galaxy theme
        toggleTheme: () => {
            // No-op since we're using fixed galaxy theme
            console.log('Theme switching disabled - using galaxy theme')
        }
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
} 