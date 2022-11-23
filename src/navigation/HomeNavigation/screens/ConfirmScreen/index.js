import React from 'react';
import {View, Text, SafeAreaView, Image, KeyboardAvoidingView} from 'react-native';
import styled from 'styled-components';
import n from 'helper/normalize';
import {colors} from 'styles/colors';   


//components
import {ButtonL, SingleLineList, St, Sv, InputL, HeaderL} from 'components/index';
import { PayconfirmSection } from './components/PayconfirmSection';
import { Header } from './components/Header';
//images
import LogoPaper from 'images/svg/logo-paper.svg';
import ImgList from 'images/png/img-list.png';
import { BtnSection } from './components/BtnSection';



export const ConfirmScreen = () => {
  return (
    <S.Container>
      <Sv style={{flex: 1}}>
            <Header />
            <PayconfirmSection />
       </Sv>
       <Sv mx ={22} mb={12}>
            <St g3>
              {'받는 분에게 표기'}
            </St>
            <St h3>
              {'김남하'}
            </St>
          </Sv>
          <Sv mx={22} h={2} bg={colors.g6} />
          <Sv mx={22} mt={12}>
            <St h4>
              {'보유 금액'}
            </St>
            <St g3>
              {'20,000원'}
            </St>
          </Sv>
          <Sv mx={22} mt={12}>
            <St h4>
              {'수수료'}
            </St>
            <St g3>
              {'1,000원'}
            </St>
          </Sv>
       <BtnSection />
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

