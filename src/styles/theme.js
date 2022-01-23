// primary: '#ff8a3d',
// black: '#000000',
// red: '#f77f77',
// grey: '#9e9e9e',
// lightGrey: '#eeeeee',
// deepGrey: '#757575',
// darkGrey: '#656e75',

const light = {
  bg: {
    primary: '#ff8a3d',
    bodyBg: '#ffffff',
    darkBtn: '#eeeeee',
  },
  text: {
    primary: '#ff8a3d',
    bodyText: '#000000',
    darkBtn: '#000000',
  },
};
const dark = {
  bg: {
    primary: '#ff8a3d',
    bodyBg: '#212121',
    darkBtn: '#757575',
  },
  text: {
    primary: '#ff8a3d',
    bodyText: '#d9d9d9',
    darkBtn: '#ffffff',
  },
};

const mediaQuery = {
  mobile: '375px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1600px',
};

export const mode = {
  light: { ...light, mediaQuery },
  dark: { ...dark, mediaQuery },
};
