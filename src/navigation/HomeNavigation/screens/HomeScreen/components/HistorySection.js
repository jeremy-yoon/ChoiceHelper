import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import styled from 'styled-components';
import n from 'helper/normalize';
import {colors} from 'styles/colors';

//components
import {ButtonL, SingleLineList, St, Sv} from 'components/index';

//images
import LogoPaper from 'images/svg/logo-paper.svg';
import ImgList from 'images/png/img-list.png';

export const HistorySection = () => {
  return (
    <Sv>
      <Sv h={120} act jct>
        <St c2 g3>
          거래 내역이 없습니다.
        </St>
      </Sv>
    </Sv>
  );
};

const S = {};

S.ImgList = styled(Image)`
  width: ${n(200)}px;
  height: ${n(200)}px;
  resize-mode: contain;
`;
