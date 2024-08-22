import React, {memo} from 'react';
import styled, {useTheme} from 'styled-components/native';
import {Pressable} from 'react-native';
import {Loader} from './Loader';

type ButtonProps = {
  title: string;
  disabled?: boolean;
  loading?: boolean;
  onPress: () => void;
};

export const Button = memo<ButtonProps>(
  ({title, disabled = false, loading = false, onPress}) => {
    const theme = useTheme();

    return (
      <Container disabled={disabled} onPress={onPress}>
        {loading ? (
          <Loader color={theme.colors.background} />
        ) : (
          <Text disabled={disabled}>{title}</Text>
        )}
      </Container>
    );
  },
);

const Container = styled(Pressable)<{disabled: boolean}>`
  background-color: ${({theme, disabled}) =>
    disabled ? theme.colors.disabled : theme.colors.primary};
  border-radius: 6px;
  padding: 8px 20px;
  height: 48px;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text<{disabled: boolean}>`
  color: ${({theme, disabled}) =>
    disabled ? theme.colors.secondary : theme.colors.background};
  font-size: 16px;
  font-weight: 500;
`;
