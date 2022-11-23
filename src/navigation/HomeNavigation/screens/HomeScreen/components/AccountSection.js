import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import n from 'helper/normalize';
import {colors} from 'styles/colors';

//components
import {ButtonL, SingleLineList, St, Sv} from 'components/index';

//images
import LogoPaper from 'images/svg/logo-paper.svg';
import ImgList from 'images/png/img-list.png';

export const AccountSection = () => {
  const [accountNumber, setAccountNumber] = useState('abcd1234');
  const [balance, setBalance] = useState(0);
  return (
    <>
      <Sv mx={22} mt={36}>
        <Sv as={TouchableOpacity} row py={4} px={8} ml={-8}>
          <St b2 g2>
            간편계좌:{' '}
          </St>
          <St b2 g2 underline>
            {accountNumber}
          </St>
        </Sv>
        <Sv row>
          <St h2 g0>
            {balance}
          </St>
          <St h2 g0>
            원
          </St>
        </Sv>
        <Sv row mt={36} mb={28}>
          <Sv f={1}>
            <ButtonL fillGray title="충전" />
          </Sv>
          <Sv w={12} />
          <Sv f={1}>
            <ButtonL title="결제/송금" />
          </Sv>
        </Sv>
      </Sv>
    </>
  );
};

const S = {};

S.ImgList = styled(Image)`
  width: ${n(200)}px;
  height: ${n(200)}px;
  resize-mode: contain;
`;
