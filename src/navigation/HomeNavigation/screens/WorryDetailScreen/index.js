import React, {useState, useEffect} from 'react';
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

export const WorryDetailScreen = ({route}) => {
  const navigation = useNavigation();
  const {id} = route.params;

  const [worries, setWorries] = useRecoilState(worriesAtom);

  const [worry, setWorry] = useState({});

  const onPressSolve = () => {
    setWorries(
      worries.map(worry => {
        if (worry.id === id) {
          return {...worry, isSolved: true};
        } else {
          return worry;
        }
      }),
    );

    navigation.goBack();
  };

  useEffect(() => {
    setWorry(worries.find(worry => worry.id === id));
  }, []);

  return (
    <S.Container>
      <Sv mx={22} mt={12}>
        <Sv>
          <St h3 g0 mt={20}>
            {worry.title}
          </St>
          <St b2 g3 mt={8}>
            {`고민의 답은 이미 알고 있을 거예요.
결정하는 것 만으로 이뤄지는 것은 많아요.`}
          </St>
        </Sv>
        <Sv>
          <St b1 g0 mt={20}>
            {worry.solution}
          </St>
        </Sv>
      </Sv>
      <S.ButtonWrapper>
        <ButtonL title={'고민 완료하기'} onPress={onPressSolve} />
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
