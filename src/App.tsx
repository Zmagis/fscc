/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import styled, {ThemeProvider} from 'styled-components/native';
import {theme} from './theme';
import ArrowLoop from '@assets/icons/ArrowLoop.svg';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ArrowLoop />
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  height: 100%;
  width: 100%;
`;
