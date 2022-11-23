import React from 'react';
import {View, Text, SafeAreaView, Image, Button} from 'react-native';
import styled from 'styled-components';
import n from 'helper/normalize';
import {colors} from 'styles/colors'; 

//components
import {ButtonL, SingleLineList, St, Sv, InputL, HeaderL} from 'components/index';



export const PayAccountSection = () => {
  
  
  return (
      <Sv mx={22} mt={22}>
        <InputL
          placeholder='받을 분 윈피간편계좌를 입력하세요' 
        />
            <St s2 mt={22}>
                {'즐겨찾기 계좌'} 
            </St>
             <Sv mt={22}>
                 <St s2>
                    {'즐겨찾는 계좌이름'}
                </St>
                 <St c2 g3>
                     {'은행 21313288272918'}
                </St>
             </Sv>
             <Sv mt={22}>
                 <St s2>
                    {'즐겨찾는 계좌이름'}
                </St>
                <St c2 g3>
                    {'은행 21313288272918'}
                </St>
            </Sv>
      </Sv>
  )
}

const S = {}; 
