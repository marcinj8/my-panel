export interface ThemeData {
  bg: {};
  btBg: {};
  color: {};
  border: {};
  fontSize: {};
}
export const themes = {
  default: {
    bg: {
      main: 'lightblue',
      secondary: 'silver',
      danger: 'red',
    },
    bgMenu: {
      main: 'lightblue',
      secondary: 'silver',
      danger: 'red',
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
    devices: {
      tablet: '450px',
      desktop: '750px',
    },
  },
  dark: {
    bg: {
      main: 'gray',
      secondary: 'gray',
      danger: 'pink',
    },
    btBg: {
      danger: 'pink',
      primary: 'gray',
      secondary: 'white',
      confirm: 'green',
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
    devices: {
      tablet: '450px',
      desktop: '750px',
    },
  },
};
