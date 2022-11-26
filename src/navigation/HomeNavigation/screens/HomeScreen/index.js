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
import {worriesAtom} from 'store/atom/worry';
import {useRecoilState} from 'recoil';
import {useNavigation} from '@react-navigation/native';

//images

//components
import {ButtonL, SingleLineList, St, Sv} from 'components/index';

export const HomeScreen = () => {
  const navigation = useNavigation();

  const [worries, setWorries] = useRecoilState(worriesAtom);

  const goAddWorryScreen = () => {
    navigation.navigate('AddWorryScreen');
  };

  return (
    <S.Container>
      <Sv mx={22} mt={12}>
        <Sv>
          <St h3 g0 mt={20}>
            {`당신 인생의 고민을
해결해드릴게요.`}
          </St>
          <St b2 g3 mt={8}>
            {`고민의 답은 이미 알고 있을 거예요.
결정하는 것 만으로 이뤄지는 것은 많아요.`}
          </St>
        </Sv>
      </Sv>
      <Sv mx={22}>
        <Sv my={20}>
          <ButtonL line title="새로운 고민 추가 +" onPress={goAddWorryScreen} />
        </Sv>
        <FlatList
          data={worries}
          renderItem={({item}) => <SingleLineList title={item.title} />}
          keyExtractor={item => item.id}
        />
      </Sv>
    </S.Container>
  );
};

const S = {};

S.Container = styled(SafeAreaView)`
  background-color: white;
  flex: 1;
`;
