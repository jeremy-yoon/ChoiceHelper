import React from 'react';
import {View, Text, SafeAreaView, Image, KeyboardAvoidingView} from 'react-native';
import styled from 'styled-components';
import n from 'helper/normalize';
import {colors} from 'styles/colors';   


//components
import {ButtonL, SingleLineList, St, Sv, InputL, HeaderL} from 'components/index';
import {BtnSection} from './components/BtnSection';
import {HeadSection} from './components/HeadSection';
import { PayAccountSection } from './components/PayAccountSection';


//images
import LogoPaper from 'images/svg/logo-paper.svg';
import ImgList from 'images/png/img-list.png';



export const PayScreen = () => {
  return (
    <S.Container>
      <KeyboardAvoidingView behavior='padding' style={{flex:1}}>
         <Sv style={{flex: 1}}>
            <HeadSection />
            <PayAccountSection />
        </Sv>
            <BtnSection />
      </KeyboardAvoidingView>
    </S.Container>
  );
};

const S = {};

S.Container = styled(SafeAreaView)`
  background-color: white;
  flex: 1;
`;

S.ImgList = styled(Image)`
  width: ${n(200)}px;
  height: ${n(200)}px;
  resize-mode: contain;
`;

