const THEME = 'THEME';

export const getTheme = () => {
    return localStorage.getItem(THEME);
}


export const setTheme = (value) => {
    return localStorage.setItem(THEME, value)
}


export const clearTheme = () => {
    return localStorage.clear(THEME)
}