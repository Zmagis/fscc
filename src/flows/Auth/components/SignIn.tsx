import React, {useCallback} from 'react';
import styled from 'styled-components/native';
import {Button} from '@components/Button';
import {useFormik} from 'formik';
import {authUserSchema} from '@utils/validation';
import {Input} from '@components/Inputs/Input';
import {PasswordInput} from '@components/Inputs/PasswordInput';

export const SignInForm = () => {
  const submit = useCallback((data: {email: string; password: string}) => {
    console.log('submit', data);
  }, []);

  const {values, errors, handleChange, handleSubmit} = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: authUserSchema(),
    onSubmit: submit,
  });

  return (
    <Container>
      <Input
        placeholder="El.paštas"
        value={values.email}
        error={errors.email}
        onChangeText={handleChange('email')}
      />
      <PasswordInput
        placeholder="Slaptažodis"
        value={values.password}
        error={errors.password}
        onChangeText={handleChange('password')}
      />
      <Button
        title="Prisijungti"
        disabled={!values.email || !values.password}
        onPress={handleSubmit}
      />
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
`;
