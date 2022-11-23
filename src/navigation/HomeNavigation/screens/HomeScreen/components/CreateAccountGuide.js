import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import styled from 'styled-components';
import n from 'helper/normalize';
import {colors} from 'styles/colors';
import {useNavigation} from '@react-navigation/native';

//components
import {ButtonL, SingleLineList, St, Sv} from 'components/index';

//images
import ImgList from 'images/png/img-list.png';

export const CreateAccountGuide = () => {
  const navigation = useNavigation();

  const goAccountCreateScreen = () => {
    navigation.navigate('AccountCreateScreen');
  };

  return (
    <>
      <Sv mx={22} mt={12}>
        <Sv>
          <St h3 g0 mt={20}>
            {`인증이나 복잡한 서류 없이
간편계좌를 만들어보세요.`}
          </St>
          <St b2 g3 mt={16}>
            {`아직 간편계좌를 생성하지 않으셨습니다.
간편계좌 생성 후에 서비스 이용 바랍니다.`}
          </St>
          <Sv h={300} act jct>
            <S.ImgList source={ImgList} />
          </Sv>
        </Sv>
        <Sv mb={16}>
          <ButtonL title="간편계좌 만들기" onPress={goAccountCreateScreen} />
        </Sv>
      </Sv>
      <Sv h={16} bg={colors.g6} />
      <Sv mx={22}>
        <SingleLineList title="간편계좌 복원하기" hasArrow />
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
