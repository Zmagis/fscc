import React, {PropsWithChildren, memo} from 'react';
import {Platform, SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import ArrowLoop from '@assets/icons/ArrowLoop.svg';
import {Image as ImageComponent} from '@components/Image';
import Title from '@assets/icons/Title.svg';

const HEADER_HEIGHT = 200;

export const Layout = memo<PropsWithChildren>(({children}) => (
  <Container>
    <InnerContainer>
      <Header>
        <ArrowLoopBig width="327" height="327" />
        <ArrowLoopSmall width="222" height="222" />
      </Header>
      <OuterContainer>
        <Body>
          <RoundAccessory />
          <OMS />
          {children}
        </Body>
      </OuterContainer>
      <Footer>
        <Image source={require('@assets/images/Logo.png')} />
      </Footer>
    </InnerContainer>
  </Container>
));

const Container = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  height: 100%;
`;

const OuterContainer = styled.KeyboardAvoidingView.attrs(() => ({
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
}))`
  background-color: ${({theme}) => theme.colors.primary};
`;

const InnerContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: flex-end;
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
  flex: 1;
`;

const Image = styled(ImageComponent)`
  width: 47px;
  height: 30px;
`;
