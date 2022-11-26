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

export const AddWorryScreen = () => {
  const navigation = useNavigation();

  const [worries, setWorries] = useRecoilState(worriesAtom);
  const [writingWorries, setWritingWorries] =
    useRecoilState(writingWorriesAtom);
  const [worryTitle, setWorryTitle] = useState('');
  const [solutionTitle, setSolutionTitle] = useState('');
  const [step, setStep] = useState(1);

  const onPressNext = () => {
    if (step === 1) {
      setStep(2);
    } else {
      setWorries([
        ...worries,
        {
          id: worries.length + 1,
          title: worryTitle,
          solution: solutionTitle,
        },
      ]);
      navigation.goBack();
    }
  };

  const onPressPrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <S.Container>
      <Sv mx={22} mt={12}>
        <Sv>
          <St h3 g0 mt={20}>
            {step == 1
              ? `어떤 고민인지 알려주세요.`
              : `알고 있는 해결책을 적어주세요.`}
          </St>
          <St b2 g3 mt={8}>
            {`고민의 답은 이미 알고 있을 거예요.
결정하는 것 만으로 이뤄지는 것은 많아요.`}
          </St>
        </Sv>
      </Sv>
      <Sv mx={24} mt={24}>
        <InputL
          title="고민"
          placeholder="고민을 적어주세요."
          value={worryTitle}
          onChangeText={e => setWorryTitle(e)}
        />
        {step > 1 && (
          <Sv mt={20}>
            <InputL
              placeholder="해결책을 적어주세요."
              value={solutionTitle}
              onChangeText={e => setSolutionTitle(e)}
            />
          </Sv>
        )}
      </Sv>
      <S.ButtonWrapper>
        <ButtonL
          disabled={worryTitle.length === 0}
          title={step > 1 ? '완료' : '다음'}
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
