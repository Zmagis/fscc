import React, {memo, useCallback, useMemo, useState} from 'react';
import Eye from '@assets/icons/Eye.svg';
import {Platform, TouchableOpacity} from 'react-native';
import {Input, InputProps} from './Input';

type PasswordInputProps = InputProps;

export const PasswordInput = memo<PasswordInputProps>(({value, ...rest}) => {
  const [isTextHidden, setIsTextHidden] = useState(true);

  const passwordValue = useMemo(
    () =>
      Platform.OS === 'android' && isTextHidden && value
        ? new Array(value.length + 1).join('•')
        : value,
    [isTextHidden, value],
  );

  const toggleSecurity = useCallback(() => {
    setIsTextHidden(prevState => !prevState);
  }, []);

  const renderTrailingIcon = useCallback(
    () => (
      <TouchableOpacity onPress={toggleSecurity}>
        <Eye />
      </TouchableOpacity>
    ),
    [toggleSecurity],
  );

  return (
    <Input
      value={passwordValue}
      secureTextEntry={isTextHidden}
      trailingIcon={renderTrailingIcon}
      {...rest}
    />
  );
});
