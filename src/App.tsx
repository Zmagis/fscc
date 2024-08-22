import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './theme';
import {Auth} from './flows/Auth';

const App = () => (
  <ThemeProvider theme={theme}>
    <Auth />
  </ThemeProvider>
);

export default App;
