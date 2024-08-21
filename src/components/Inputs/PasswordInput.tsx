import React, {memo, useCallback, useState} from 'react';
import Eye from '@assets/icons/Eye.svg';
import {TouchableOpacity} from 'react-native';
import {Input, InputProps} from './Input';

type PasswordInputProps = InputProps;

export const PasswordInput = memo<PasswordInputProps>(props => {
  const [isTextHidden, setIsTextHidden] = useState(true);

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
      secureTextEntry={isTextHidden}
      trailingIcon={renderTrailingIcon}
      {...props}
    />
  );
});
