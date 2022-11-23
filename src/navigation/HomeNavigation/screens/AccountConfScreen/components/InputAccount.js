import React from 'react';
import {View, Text, SafeAreaView, Image, Button} from 'react-native';
import styled from 'styled-components';
import n from 'helper/normalize';
import {colors} from 'styles/colors'; 

//components
import {ButtonL, SingleLineList, St, Sv, InputL, HeaderL} from 'components/index';


export const InputAccount = () => {
  
  
  return (
      <Sv mx={22}>
          <St c2 g3>
            {'은행명'}
          </St>
            <InputL
              placeholder='하나은행'
            />
          <St mt={'22'} c2 g3>
            {'예금주'}
         </St>
            <InputL
              placeholder='주식회사 애니버'
            />
          <St mt={'22'} c2 g3>
            {'계좌번호'}
          </St>
            <InputL 
              placeholder='1341232132'
          />
          <St mt={'22'} c2 g3>
            {'충전금액'}
          </St>
            <InputL
              placeholder='200,000원'
            />
          <St mt={'22'} c2 g3>
            {'만료일'}
          </St>
            <InputL
               placeholder='30분 남음'
            />
        </Sv>

        
  )
}

const S = {}; 
