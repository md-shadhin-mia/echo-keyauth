'use client';
import { useTheme } from "@/utils/ThemeProvider";

function Body({ children }) {
    const { theme } = useTheme();
    return (
        <body
            className={`antialiased ${theme}`} dir="ltr"
        >
            {children}
        </body>
    )
}

export default Body;