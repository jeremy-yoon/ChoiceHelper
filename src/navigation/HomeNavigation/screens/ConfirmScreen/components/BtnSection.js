import React from 'react';
import {View, Text, SafeAreaView, Image, KeyboardAvoidingView} from 'react-native';
import styled from 'styled-components';
import n from 'helper/normalize';
import {colors} from 'styles/colors'; 
import {useNavigation} from '@react-navigation/native';

//components
import {ButtonL, SingleLineList, St, Sv, InputL, HeaderL} from 'components/index';

//images
import LogoPaper from 'images/svg/logo-paper.svg';
import ImgList from 'images/png/img-list.png';

export const BtnSection = () => {
  const navigation = useNavigation();

  const goconfScreen = () => {
    navigation.navigate('AccountConfScreen');
  };
  const goBackScreen = () => {
    navigation.navigate('PayScreen');
  };
  return (
    <Sv>
      <St>
      </St>
    <Sv row mt={36} mb={22} mx={17}>
    <Sv f={1}>
      <ButtonL fillGray title="취소" onPress={goBackScreen}/>
    </Sv>
    <Sv w={12} />
    <Sv f={1}>
      <ButtonL title="송금하기" onPress={goconfScreen}/>
    </Sv>
  </Sv>
  </Sv>
  );
};

const S = {};


S.Container = styled(SafeAreaView)`
  background-color: white;
  flex: 1;
`;

S.ImgList = styled(Image)`s
  width: ${n(200)}px;
  height: ${n(200)}px;
  resize-mode: contain;
`;
