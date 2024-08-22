import React, {memo, useRef} from 'react';
import {InputOutline} from 'react-native-input-outline';
import styled, {useTheme} from 'styled-components/native';
import {Platform, TextInputProps, View} from 'react-native';

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
      <View>
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
        {/* This is work around.
            If I would have more time I would
            change react-native-input-outline to other solution
        */}
        {Platform.OS === 'android' && <Value>{value}</Value>}
      </View>
    );
  },
);

const TextField = styled(InputOutline)`
  height: 48px;
  margin-bottom: 20px;
`;

const Value = styled.Text`
  color: ${({theme}) => theme.colors.text};
  z-index: 100;
  position: absolute;
  top: 12px;
  left: 18px;
`;
