/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './theme';
import {Auth} from './flows/Auth';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ThemeProvider theme={theme}>
      <Auth />
    </ThemeProvider>
  );
}

export default App;
