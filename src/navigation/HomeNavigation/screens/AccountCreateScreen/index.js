import React from 'react';
import {View, Text, SafeAreaView, Image, KeyboardAvoidingView} from 'react-native';
import styled from 'styled-components';
import n from 'helper/normalize';
import {colors} from 'styles/colors';   


//components
import {ButtonL, SingleLineList, St, Sv, InputL, HeaderL} from 'components/index';
import {ButtonSection} from './components/ButtonSection';
import {HeaderSection} from './components/HeaderSection';
import {InputSection} from './components/InputSection';

//images
import LogoPaper from 'images/svg/logo-paper.svg';
import ImgList from 'images/png/img-list.png';


export const AccountCreateScreen = () => {
  return (
    <S.Container>
      <KeyboardAvoidingView behavior='padding' style={{flex: 1}}>
         <Sv style={{flex: 1}}>
            <HeaderSection />
            <InputSection />
          <Sv mx={22}>
           <St b2 g3 mt={16}>
            {`은행계좌번호는 입력하지 말아주세요.\n신규로 생성하고 싶은 윈피간편계좌 번호를 입력해주세요.`}
           </St>
          </Sv>
        </Sv>
          <ButtonSection />
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

