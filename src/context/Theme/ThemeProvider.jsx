import React, { useState, useLayoutEffect } from "react";
import { ThemeTokens } from "../../utils/ThemeTokens";
import { ThemeContext } from "./ThemeContext";

export default function ThemeProvider({ children }) {
    // keeps state of the current theme
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isLocalThemeDark = localStorage.getItem('dark');
    const [dark, setDark] = useState(isLocalThemeDark !== null ? JSON.parse(isLocalThemeDark) : prefersDark);

    // paints the app before it renders elements
    useLayoutEffect(() => {
        // Media Hook to check what theme user prefers
        applyTheme();
        // if state changes, repaints the app
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dark]);

    // rewrites set of css variables/colors
    const applyTheme = () => {
        let theme;
        if (dark) {
            theme = ThemeTokens.dark;
        }
        if (!dark) {
            theme = ThemeTokens.light;
        }

        const root = document.getElementsByTagName("html")[0];
        root.style.cssText = theme.join(";");
    };

    const toggle = () => {
        // A smooth transition on theme switch
        const body = document.getElementsByTagName("body")[0];
        body.style.cssText = "transition: background .5s ease";

        setDark(!dark);
        localStorage.setItem('dark', JSON.stringify(!dark));
    };

    return (
        <ThemeContext.Provider
            value={{
                dark,
                toggle
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}
