export interface ThemeElementInterface {
  main: string;
  secondary: string;
  tertiary: string;
  danger: string;
}

export interface ThemeBtBgElementInterface extends ThemeElementInterface {
  confirm: string;
}

export interface ThemeData {
  name: string;
  bg: ThemeElementInterface;
  bgMenu: ThemeElementInterface;
  bgMenuHover: ThemeElementInterface;
  btBg: ThemeBtBgElementInterface;
  btBgHover: ThemeBtBgElementInterface;
  color: ThemeElementInterface;
  border: ThemeElementInterface;
  fontSize: {};
  devices: {};
}
export interface ThemesInterface {
  [key: string]: ThemeData;
}

export const themes: ThemesInterface = {
  default: {
    name: 'domyślny',
    bg: {
      main: 'rgba(78, 169, 208, 1)',
      secondary: 'rgba(252, 239, 239, 1)',
      tertiary: 'rgba(252, 239, 239, 1)',
      danger: 'red',
    },
    bgMenu: {
      main: 'rgba(196, 253, 235)',
      secondary: 'rgba(222, 223, 225, 1)',
      tertiary: 'rgba(222, 223, 225, 1)',
      danger: 'red',
    },
    bgMenuHover: {
      main: 'rgba(296, 293, 235)',
      secondary: 'rgba(141, 253, 235, 1)',
      tertiary: 'rgba(141, 253, 235, 1)',
      danger: 'red',
    },
    btBg: {
      danger: 'pink',
      main: 'white',
      secondary: 'white',
      tertiary: 'wheat',
      confirm: 'lightgreen',
    },
    btBgHover: {
      danger: 'pink',
      main: 'white',
      secondary: 'white',
      tertiary: 'wheat',
      confirm: 'lightgreen',
    },
    color: {
      main: 'black',
      secondary: 'white',
      tertiary: 'wheat',
      danger: 'red',
    },
    border: {
      main: 'black',
      secondary: 'white',
      tertiary: 'wheat',
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
    name: 'cimeny',
    bg: {
      main: 'gray',
      secondary: 'rgba(19, 49, 92)',
      tertiary: 'rgba(19, 49, 92)',
      danger: 'pink',
    },
    bgMenu: {
      main: 'rgba(19, 64, 116)',
      secondary: 'rgba(19, 49, 92)',
      tertiary: 'rgba(19, 49, 92)',
      danger: 'red',
    },
    bgMenuHover: {
      main: 'lightblue',
      secondary: 'darkblue',
      tertiary: 'blue',
      danger: 'red',
    },
    btBg: {
      danger: 'red',
      main: 'rgba(96, 95, 94)',
      secondary: 'white',
      tertiary : 'rgba(96, 95, 94)',
      confirm: 'green',
    },
    btBgHover: {
      danger: 'red',
      main: 'rgba(96, 95, 94)',
      secondary: 'white',
      tertiary: 'rgba(96, 95, 94)',
      confirm: 'green',
    },
    color: {
      main: 'white',
      secondary: 'black',
      tertiary: 'gray',
      danger: 'red',
    },
    border: {
      main: 'white',
      secondary: 'black',
      tertiary: 'gray',
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
  spring: {
    name: 'wiosna',
    bg: {
      main: 'rgba(149, 164, 114)',
      secondary: 'rgba(195, 252, 186)',
      tertiary: 'rgba(195, 252, 186)',
      danger: 'pink',
    },
    bgMenu: {
      main: 'rgba(221, 252, 173)',
      secondary: 'rgba(180, 249, 78)',
      tertiary: 'rgba(180, 249, 78)',
      danger: 'red',
    },
    bgMenuHover: {
      main: 'lightblue',
      secondary: 'rgba(76, 237, 7)',
      tertiary: 'rgba(76, 237, 7)',
      danger: 'rgba(253, 155, 160)',
    },
    btBg: {
      danger: 'rgba(253, 155, 160)',
      main: 'rgba(241, 247, 222)',
      secondary: 'rgba(252, 115, 122)',
      tertiary: 'rgba(252, 115, 122)',
      confirm: 'green',
    },
    btBgHover: {
      danger: 'rgba(253, 155, 160)',
      main: 'rgba(241, 247, 222)',
      secondary: 'rgba(252, 115, 122)',
      tertiary: 'rgba(252, 115, 122)',
      confirm: 'green',
    },
    color: {
      main: 'black',
      secondary: 'white',
      tertiary: 'wheat',
      danger: 'red',
    },
    border: {
      main: 'rgba(64, 198, 6)',
      secondary: 'rgba(227, 254, 215)',
      tertiary: 'rgba(227, 254, 215)',
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
