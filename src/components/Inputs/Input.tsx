import React, {memo, useRef} from 'react';
import {InputOutline} from 'react-native-input-outline';
import styled, {useTheme} from 'styled-components/native';
import {TextInputProps} from 'react-native';

export type InputProps = TextInputProps & {
  value: string;
  placeholder?: string;
  error?: string;
  height?: number;
  maxLength?: number;
  trailingIcon?: () => React.ReactNode;
};

export const Input = memo<InputProps>(
  ({value, secureTextEntry = false, placeholder, trailingIcon, ...rest}) => {
    const inputRef = useRef<InputOutline>(null);
    const theme = useTheme();

    return (
      <TextField
        ref={inputRef}
        value={value}
        placeholder={placeholder}
        activeColor={theme.colors.primary}
        inactiveColor={theme.colors.border}
        fontColor={theme.colors.text}
        assistiveTextColor={theme.colors.error}
        secureTextEntry={secureTextEntry}
        trailingIcon={trailingIcon}
        {...rest}
      />
    );
  },
);

const TextField = styled(InputOutline)`
  height: 48px;
  margin-bottom: 28px;
`;
