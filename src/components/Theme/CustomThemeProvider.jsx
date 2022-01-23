import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';
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
      <DarkModeBtn type="button" onClick={handleMode}>
        {dark ? '라이트 모드로 보기' : '다크 모드로 보기'}
      </DarkModeBtn>
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

const DarkModeBtn = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  height: 40px;
  padding: 0 25px;
  border-radius: 20px;
  background: ${({ theme }) => theme.bg.darkBtn};
  color: ${({ theme }) => theme.text.darkBtn};
  font-weight: 600;
`;
