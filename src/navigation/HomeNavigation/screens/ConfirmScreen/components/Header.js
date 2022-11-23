import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import styled from 'styled-components';
import n from 'helper/normalize';
import {colors} from 'styles/colors'; 

//components
import {ButtonL, SingleLineList, St, Sv, InputL, HeaderL} from 'components/index';

//images
import LogoPaper from 'images/svg/logo-paper.svg';
import ImgList from 'images/png/img-list.png';

export const Header = () => {
    return (
      <Sv mx={12}>
        <HeaderL
          title={`김남하님에게\n송금하시겠습니까?`}
        />
      </Sv>
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
