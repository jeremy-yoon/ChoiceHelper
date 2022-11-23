import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import styled from 'styled-components';
import n from 'helper/normalize';
import {colors} from 'styles/colors'; 

//components
import {ButtonL, SingleLineList, St, Sv, InputL, HeaderL, gs} from 'components/index';

//images
import LogoPaper from 'images/svg/logo-paper.svg';
import ImgList from 'images/png/img-list.png';

export const PayconfirmSection = () => {
  const [payprice, setpayPrice] = useState(0);
  const [price, setPrice] = useState(0);

    return (
      <Sv mx={22}>
        <St h2 mt={60} center>
          {payprice} 원
        </St>
        <St g3 mt={22} center>
          {'국민은행 446002-01-266583'}
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