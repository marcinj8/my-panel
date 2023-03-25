import { CurrentThemeType, setTheme } from './reducer';

export const chageTheme = (theme: CurrentThemeType) => {
  const sattedTheme = theme;
  localStorage.setItem('myPanel_theme', JSON.stringify(sattedTheme));
  
  return theme;
};

export const checkTheme = (dispatch: Function) => {
  const theme = localStorage.getItem('myPanel_theme');

  if (theme) {
    return dispatch(setTheme(JSON.parse(theme)));
  }
};
