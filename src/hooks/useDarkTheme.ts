import { useEffect, useState } from 'react';

export default function useDarkTheme() {
    const storedTheme = localStorage.getItem('theme');
    const initialTheme = storedTheme || 'light';
    const [theme, setTheme] = useState(initialTheme);

    const colorTheme = theme === 'dark' ? 'light' : 'dark';

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);

        // save theme to local storage
        localStorage.setItem('theme', theme);
    }, [theme, colorTheme]);

    return [colorTheme, setTheme];
}
