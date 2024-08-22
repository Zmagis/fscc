import React, {memo, useCallback} from 'react';
import styled from 'styled-components/native';
import {Button} from '@components/Button';
import {useFormik} from 'formik';
import {authUserSchema} from '@utils/validation';
import {Input} from '@components/Inputs/Input';
import {PasswordInput} from '@components/Inputs/PasswordInput';
import {login, LoginParams} from '@service/auth';

type LogInFormProps = {
  finishLogin: (email: string) => void;
};

export const LogInForm = memo<LogInFormProps>(({finishLogin}) => {
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  const submit = useCallback(
    async (data: LoginParams) => {
      setError(null);
      setLoading(true);
      const response = await login(data);

      if (response.error) {
        setError('Neteisingi prisijungimo duomenys');
      } else {
        finishLogin(data.email);
      }
      setLoading(false);
    },
    [finishLogin],
  );

  const {values, errors, handleChange, handleSubmit} = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: authUserSchema(),
    onSubmit: submit,
  });

  return (
    <Container>
      <Input
        autoCapitalize="none"
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
        loading={loading}
        disabled={!values.email || !values.password}
        onPress={handleSubmit}
      />
      <Error>{error}</Error>
    </Container>
  );
});

const Container = styled.View`
  width: 100%;
`;

const Error = styled.Text`
  color: ${({theme}) => theme.colors.error};
  margin-top: 8px;
`;
