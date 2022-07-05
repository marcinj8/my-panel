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
