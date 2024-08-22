import React, {useCallback} from 'react';
import {LogInForm} from './components/LogInForm';
import {Layout} from './components/Layout';
import {Home} from './components/Home';
import {Animated} from 'react-native';
import styled from 'styled-components/native';
import {layoutAnimation} from '@utils/animation';

export const Auth = () => {
  const [email, setEmail] = React.useState('');

  const finishLogin = useCallback((newEmail: string) => {
    layoutAnimation();
    setEmail(newEmail);
  }, []);

  const logout = useCallback(() => {
    layoutAnimation();
    setEmail('');
  }, []);

  return (
    <Layout>
      <Container>
        {!email ? (
          <LogInForm finishLogin={finishLogin} />
        ) : (
          <Home email={email} logout={logout} />
        )}
      </Container>
    </Layout>
  );
};

const Container = styled(Animated.View)`
  width: 100%;
`;
