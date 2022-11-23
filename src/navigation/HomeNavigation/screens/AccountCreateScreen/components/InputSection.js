import React from 'react';
import {View, Text, SafeAreaView, Image, Button} from 'react-native';
import styled from 'styled-components';
import n from 'helper/normalize';
import {colors} from 'styles/colors'; 

//components
import {ButtonL, SingleLineList, St, Sv, InputL, HeaderL} from 'components/index';


export const InputSection = () => {
  
  
  return (
      <Sv mx={22}>
        <InputL
          placeholder='영문, 숫자3~12자'
        />
        </Sv>
  )
}

const S = {}; 
