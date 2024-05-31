import React, { useState, useLayoutEffect } from "react";

export const ThemeContext = React.createContext({
    dark: false,
    toggle: () => { }
});

export default function ThemeProvider({ children }) {
    // keeps state of the current theme
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isLocalThemeDark = localStorage.getItem('dark');
    const [dark, setDark] = useState(isLocalThemeDark !== null ? JSON.parse(isLocalThemeDark) : prefersDark);

    console.log(isLocalThemeDark, dark, typeof dark)

    // paints the app before it renders elements
    useLayoutEffect(() => {
        // Media Hook to check what theme user prefers
        applyTheme();
        // if state changes, repaints the app
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dark]);

    // rewrites set of css variablels/colors
    const applyTheme = () => {
        let theme;
        if (dark) {
            theme = darkTheme;
        }
        if (!dark) {
            theme = lightTheme;
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

// styles
const lightTheme = [
    "--bg-color: var(--beige-100)",
    "--bg-interface: var(--turquoise-200)",
    "--bg-button: var(--turquoise-800)",
    "--text-color: var(--turquoise-900)",
    "--bg-shadow: var(--turquoise-800)",
];

const darkTheme = [
    "--bg-color: var(--blue-900)",
    "--bg-interface: var(--blue-500)",
    "--bg-button: var(--turquoise-400)",
    "--text-color: var(--turquoise-400)",
    "--bg-shadow: var(--turquoise-400)",
];
