export const themeStorageKey = "theme";

/**
 * Runs in <head> before first paint so a saved dark preference never flashes light.
 * Light is the default; nothing is stored until the visitor picks a theme.
 */
export const themeScript = `try{if(localStorage.getItem("${themeStorageKey}")==="dark")document.documentElement.dataset.theme="dark"}catch(e){}`;
