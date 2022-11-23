import {Sv, St, ButtonS} from 'components';
import React, {useState} from 'react';
import styled from 'styled-components';
import {colors} from 'styles/colors';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export const InputL = ({
  onPress,
  style,
  placeholder = '',
  hasCaption = false,
  caption = '',
  redCaption,
  hasButton,
  buttonText = '',
  buttonDisabled,
  onChange,
  value,
  setValue,
  autoFocus,
  onChangeText,
  count = 0,
  maxLength = 0,
  numberType = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Container onPress={onPress && onPress} style={style}>
      <S.InputWrapper>
        <S.Input
          placeholder={placeholder}
          placeholderTextColor={colors.g4}
          autoFocus={autoFocus}
          value={value}
          onChangeText={onChangeText && onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          maxLength={maxLength}
          keyboardType={
            numberType
              ? Platform.OS == 'android'
                ? 'numeric'
                : 'number-pad'
              : 'default'
          }
        />
        {hasButton && (
          <S.ButtonWrapper>
            <ButtonS title={buttonText} line disabled={buttonDisabled} />
          </S.ButtonWrapper>
        )}
      </S.InputWrapper>
      <Sv h={2} bg={isFocused ? colors.primary : colors.g5} />
      {hasCaption && (
        <>
          {redCaption ? (
            <St c2 red mt={4}>
              {caption}
            </St>
          ) : (
            <Sv row jsb>
              <St c2 g3 mt={6}>
                {caption}
              </St>
              <St c2 g3 mt={6}>
                {value?.length}/{maxLength}
              </St>
            </Sv>
          )}
        </>
      )}
    </Container>
  );
};

const Container = styled.View`
width: 100%;

`;

const S = {};

S.InputWrapper = styled.View`
  width: 100%;
  border-radius: 4px;
  display: flex;
  align-items: center;
`;

S.Input = styled.TextInput`
  border: none;
  width: 100%;
  font-size: 24px;
  margin-bottom: 6px;
  color: ${colors.black};
`;

S.ButtonWrapper = styled.View`
  position: absolute;
  right: 3px;
  top: 3px;
`;
