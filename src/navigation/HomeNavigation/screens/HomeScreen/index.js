import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import n from 'helper/normalize';
import {colors} from 'styles/colors';

//images
import LogoPaper from 'images/svg/logo-paper.svg';
import IcHamburger from 'images/svg/ic-hamburger.svg';

//components
import {ButtonL, SingleLineList, St, Sv} from 'components/index';
import {CreateAccountGuide} from './components/CreateAccountGuide';
import {HistorySection} from './components/HistorySection';
import {AccountSection} from './components/AccountSection';

export const HomeScreen = () => {
  const [hasAccount, setHasAccount] = useState(false);
  return (
    <S.Container>
      <Sv ml={22} mr={12} my={6} jsb act row>
        <LogoPaper />
        <TouchableOpacity>
          <IcHamburger />
        </TouchableOpacity>
      </Sv>

      {hasAccount ? (
        <>
          {/* 계좌를 생성한 유저의 화면 */}
          <AccountSection />
          <Sv h={16} bg={colors.g6} />
          <HistorySection />
        </>
      ) : (
        <>
          {/* 계좌를 하지 않은 유저의 화면 */}
          <CreateAccountGuide />
        </>
      )}
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
