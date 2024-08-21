import React, {PropsWithChildren, memo} from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import ArrowLoop from '@assets/icons/ArrowLoop.svg';
import {Image} from '@components/Image';
import Title from '@assets/icons/Title.svg';

const HEADER_HEIGHT = 200;

export const Layout = memo<PropsWithChildren>(({children}) => (
  <Container>
    <InnerContainer>
      <Header>
        <ArrowLoopBig width="327" height="327" />
        <ArrowLoopSmall width="222" height="222" />
      </Header>
      <Body>
        <RoundAccessory />
        <OMS />
        {children}
      </Body>
      <Footer>
        <Image source={require('@assets/images/Logo.png')} />
      </Footer>
    </InnerContainer>
  </Container>
));

const Container = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  width: 100%;
  height: 100%;
`;

const InnerContainer = styled(SafeAreaView)`
  height: 100%;
`;

const Header = styled.View`
  height: ${HEADER_HEIGHT}px;
  width: 100%;
  flex-direction: row;
`;

const ArrowLoopBig = styled(ArrowLoop)`
  width: 327px;
  height: 327px;
  position: absolute;
  top: 0px;
  left: -60px;
`;
const ArrowLoopSmall = styled(ArrowLoop)`
  width: 222px;
  height: 222px;
  position: absolute;
  right: -125px;
  top: 50px;
  transform: rotate(250deg);
`;

const Body = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 100px;
  padding-horizontal: 20px;
`;

const RoundAccessory = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  height: 815px;
  width: 815px;
  border-radius: 407px;
  position: absolute;
  top: 0;
`;

const OMS = styled(Title)`
  margin-bottom: 60px;
`;

const Footer = styled.View`
  align-items: center;
  justify-content: flex-end;
`;
