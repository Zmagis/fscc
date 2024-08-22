import {Button} from '@components/Button';
import React, {memo} from 'react';
import styled from 'styled-components/native';

type HomeProps = {email: string; logout: () => void};

export const Home = memo<HomeProps>(({email, logout}) => {
  return (
    <Container>
      <BoldText>
        El.paštas: <Text>{email}</Text>
      </BoldText>
      <Button title="Atsijungti" onPress={logout} />
    </Container>
  );
});

const Container = styled.View`
  width: 100%;
  gap: 20px;
`;

const BoldText = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

const Text = styled.Text`
  font-size: 16px;
`;
