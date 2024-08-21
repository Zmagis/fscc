import {AppColors, DefaultTheme} from 'styled-components/native';

const colors: AppColors = {
  primary: '#286EE6',
  secondary: '#6B8AB9',
  text: '#151D36',
  lightText: '#78828B',
  background: '#FFFFFF',
  error: '#FF5252',
  disabled: '#EBEFF9',
  border: '#78828B',
};

export type Colors = keyof typeof colors;

export const theme: DefaultTheme = {
  type: 'light',
  colors,
};
