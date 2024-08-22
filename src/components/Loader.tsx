import React from 'react';
import {ActivityIndicatorProps} from 'react-native';
import styled from 'styled-components/native';

export const Loader = ({color}: ActivityIndicatorProps) => (
  <LoaderElement color={color} />
);

const LoaderElement = styled.ActivityIndicator.attrs(({theme, color}) => ({
  size: 'small',
  color: color || theme.colors.secondary,
}))``;
