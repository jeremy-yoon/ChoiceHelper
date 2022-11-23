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

export const ButtonSection = () => {
  const navigation = useNavigation();

  const goHomeScreen = () => {
    navigation.navigate('QRcodeScreen');
  };
  return (
      <Sv mx={22} mb={22} >
        <ButtonL title="확인" onPress={goHomeScreen}/>
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
