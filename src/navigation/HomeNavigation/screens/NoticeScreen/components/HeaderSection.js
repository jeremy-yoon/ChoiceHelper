import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import styled from 'styled-components';
import n from 'helper/normalize';
import {colors} from 'styles/colors'; 

//components
import {ButtonL, SingleLineList, St, Sv, InputL, HeaderL} from 'components/index';

//images
import LogoPaper from 'images/svg/logo-paper.svg';
import ImgList from 'images/png/img-list.png';

export const HeaderSection = () => {
    return (
      <Sv mx={22}>
        <HeaderL
          title={`페퍼 충전 및 계좌출금을 위해\n본인 인증이 필요해요`}
        />
           <St b2 g2 mt={22}>

               {`1. 충전 결제/입금 후 0시간(0영업일) 이내에 충전금액의 \n   계좌출금 기능은 전자금융범죄 피해 예방을 위해 \n   제한될 수 있습니다.\n`}
            </St>
            <St b2 g2 mt={14}>

               {`1. 충전 결제/입금 후 0시간(0영업일) 이내에 충전금액의 \n   계좌출금 기능은 전자금융범죄 피해 예방을 위해 \n   제한될 수 있습니다.\n`}
            </St>
            <St b2 g2 mt={14}>

               {`1. 충전 결제/입금 후 0시간(0영업일) 이내에 충전금액의 \n   계좌출금 기능은 전자금융범죄 피해 예방을 위해 \n   제한될 수 있습니다.\n`}
            </St>
            <St g3>
                {' 금융 위원회의 관리감독하에 실시하고 있는 \n [전자 / 금융번죄 피해 예방제도]에 따라 \n 출금/취소 등에 안전 거래 준칙을 적용하고 있습니다'}
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
