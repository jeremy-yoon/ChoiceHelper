import React from 'react';
import {View, Text, SafeAreaView, Image, Button} from 'react-native';
import styled from 'styled-components';
import n from 'helper/normalize';
import {colors} from 'styles/colors'; 
// import QRCode from 'react-native-qrcode-svg';

//components
import {ButtonL, SingleLineList, St, Sv, InputL, HeaderL} from 'components/index';


export const QRcodeSection = () => {

  // render() {
  //   return (
  //     <QRCode
  //       value="http://paper.link.qr"
  //     />
  //   );
  // };
   
  return (
      <Sv row mt={23} mx={22}>
           <St b2 mx={22}>
              {`페퍼간편계좌 \nXLPR1234`}
            </St>
              <ButtonL fillGray title='복사하기'/>
      </Sv>
  )
}

const S = {}; 
