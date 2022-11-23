import React from 'react';
import {View, Text, SafeAreaView, Image, KeyboardAvoidingView, Button} from 'react-native';
import styled from 'styled-components';
import n from 'helper/normalize';
import {colors} from 'styles/colors';   


//components
import {ButtonL, SingleLineList, St, Sv, InputL, HeaderL} from 'components/index';
import {HeadSection} from './components/HeadSection';
import { InputAccount } from './components/InputAccount';
import {BtnSection} from './components/BtnSection'


//images
import LogoPaper from 'images/svg/logo-paper.svg';
import ImgList from 'images/png/img-list.png';


export const AccountConfScreen = () => {
  return (
    <S.Container>
         <Sv style={{flex: 1}}>
            <HeadSection />
            <InputAccount />
        </Sv>
        <Sv>
        <BtnSection />
              <Button g3
              title ={'계좌입금 이용안내'}
              />
        </Sv>
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

