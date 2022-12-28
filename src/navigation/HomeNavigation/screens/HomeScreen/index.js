import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import styled from 'styled-components';
import {worriesAtom} from 'store/atom/worry';
import {useRecoilState} from 'recoil';
import {useNavigation} from '@react-navigation/native';

//components
import {ButtonL, TwoLineList, St, Sv} from 'components/index';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const [worries, setWorries] = useRecoilState(worriesAtom);

  const goAddWorryScreen = () => {
    navigation.navigate('AddWorryScreen');
  };

  const goWorryDetailScreen = id => {
    navigation.navigate('WorryDetailScreen', {id});
  };

  const unresolvedWorries = worries.filter(worry => !worry.isSolved);
  const resolvedWorries = worries.filter(worry => worry.isSolved);

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
        <Sv>
          <St s1 g0 mt={20}>
            해결 중인 고민
          </St>
        </Sv>
        <FlatList
          data={unresolvedWorries}
          renderItem={({item}) => (
            <TwoLineList
              title={item.solution}
              date={item.title}
              onPress={() => goWorryDetailScreen(item.id)}
            />
          )}
          keyExtractor={item => item.id}
        />
        <Sv>
          <St s1 g0 mt={20}>
            해결한 고민
          </St>
        </Sv>
        <FlatList
          data={resolvedWorries}
          renderItem={({item}) => (
            <TwoLineList
              title={item.solution}
              date={item.title}
              onPress={() => goWorryDetailScreen(item.id)}
            />
          )}
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
