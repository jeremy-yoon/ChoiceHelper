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

export const HeadSection = () => {
    return (
      <Sv mx={12}>
        <HeaderL
          title={`결제/송금을 위해\n입력해주세요`}
        />
        <St mx={12} g3>
            {'출금 가능 금액 48,234원'}
        </St>
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
