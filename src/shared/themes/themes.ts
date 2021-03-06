export interface ThemeData {
  bg: {};
  color: {};
  border: {};
  fontSize: {};
}
export const themes = {
  default: {
    bg: {
      main: 'wheat',
      secondary: 'silver',
      danger: 'pink',
    },
    btBg: {
      danger: 'pink',
      primary: 'white',
      secondary: 'white',
      confirm: 'lightgreen',
    },
    color: {
      main: 'black',
      secondary: 'white',
      danger: 'red',
    },
    border: {
      main: 'black',
      secondary: 'wheat',
      danger: 'red',
    },
    fontSize: {
      small: '.8rem',
      normal: '1rem',
      big: '1.2rem',
    },
  },
  dark: {
    bg: {
      main: 'gray',
      secondary: 'silver',
      danger: 'pink',
    },
    btBg: {
      danger: 'pink',
      primary: 'gray',
      secondary: 'white',
      confirm: 'lightgreen',
    },
    color: {
      main: 'white',
      secondary: 'black',
      danger: 'red',
    },
    border: {
      main: 'white',
      secondary: 'black',
      danger: 'red',
    },
    fontSize: {
      small: '.8rem',
      normal: '1rem',
      big: '1.2rem',
    },
  },
};
