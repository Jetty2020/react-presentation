import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Global, ThemeProvider } from '@emotion/react';
import { mode } from '../../styles/theme';
import { GlobalStyles } from '../../styles/globals';

function CustomThemeProvider({ children }) {
  const [theme, setTheme] = useState(mode.light);
  const [dark, setDark] = useState(false);
  const handleMode = () => {
    if (dark) {
      setTheme(mode.light);
    } else {
      setTheme(mode.dark);
    }
    setDark((curr) => !curr);
  };
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles(theme)} />
      {children}
      <button type="button" onClick={handleMode}>
        다크모드 버튼
      </button>
    </ThemeProvider>
  );
}

export default CustomThemeProvider;

CustomThemeProvider.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};
