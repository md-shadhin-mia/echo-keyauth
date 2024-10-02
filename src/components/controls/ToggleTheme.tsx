"use client"
import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '@/utils/ThemeProvider';
import Tooltip from '../ui/Tooltip';

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="flex items-center">
            <input
                type="checkbox"
                className="hidden"
                id="theme-toggle-switch"
                checked={theme === 'dark'}
                onChange={toggleTheme}
            />
            <Tooltip title="Toggle Theme">
                <label htmlFor="theme-toggle-switch" className="flex items-center cursor-pointer relative">
                    <motion.div
                        className="relative w-12 h-7 bg-gray-300 dark:bg-gray-600 rounded-full mx-2"
                        layout
                        transition={{ type: 'tween', stiffness: 300 }}
                    >
                        <motion.div
                            className={`absolute top-1 left-1 bg-white dark:bg-black rounded-full w-5 h-5 shadow-md`}
                            layout
                            animate={{ x: theme === 'dark' ? '100%' : 0 }}
                            transition={{ type: 'tween', stiffness: 300 }}
                        >

                        </motion.div>
                    </motion.div>
                    <FaSun className={`text-yellow-500 transition-opacity text-xs absolute top-2 left-4 ${theme === 'dark' ? 'opacity-100' : 'opacity-0 scale-75'}`} />

                    <FaMoon className={`text-gray-500 transition-opacity text-xs absolute top-2 right-4 ${theme === 'dark' ? 'opacity-0 scale-75' : 'opacity-100'}`} />
                </label>
            </Tooltip>
        </div>
    );
};

export default ThemeToggle;
