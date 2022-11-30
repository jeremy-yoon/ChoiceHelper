import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components';
import n from 'helper/normalize';
import {colors} from 'styles/colors';
import {worriesAtom, writingWorriesAtom} from 'store/atom/worry';
import {useRecoilState} from 'recoil';
import {useNavigation} from '@react-navigation/native';

//images

//components
import {ButtonL, InputL, St, Sv} from 'components/index';

export const WorryDetailScreen = () => {
  const navigation = useNavigation();

  const [worries, setWorries] = useRecoilState(worriesAtom);

  return (
    <S.Container>
      <S.ButtonWrapper>
        <ButtonL
          disabled={worryTitle.length === 0}
          title={'고민 완료하기'}
          onPress={onPressNext}
        />
      </S.ButtonWrapper>
    </S.Container>
  );
};

const S = {};

S.Container = styled(SafeAreaView)`
  background-color: white;
  flex: 1;
`;

S.ButtonWrapper = styled(View)`
  position: absolute;
  bottom: 40px;
  left: 24px;
  right: 24px;
`;
