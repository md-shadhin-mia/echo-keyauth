"use client";
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Define the type for the context
interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
    sidebarOpen: boolean;
    toggleSidebar: () => void;
}

// Create the context with an empty initial value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Define the type for ThemeProvider props
interface ThemeProviderProps {
    children: ReactNode;
}

// Create the provider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<string>('light');
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    // Set the breakpoint for mobile devices (e.g., 768px width)
    const mobileBreakpoint = 768;

    // Load theme from local storage if available
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
    }, []);

    // Function to toggle the theme
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    // Function to toggle the sidebar
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    // Automatically close the sidebar on mobile devices
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < mobileBreakpoint) {
                setSidebarOpen(false);
            } else {
                setSidebarOpen(true);
            }
        };

        // Set initial state based on current window size
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, sidebarOpen, toggleSidebar }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use the theme context
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
