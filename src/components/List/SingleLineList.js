import {Sv, St, ButtonS, ChatInput} from 'components';
import React from 'react';
import styled from 'styled-components';
import {colors} from 'styles/colors';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import n from 'helper/normalize';
import {Switch} from 'react-native-paper';

export const SingleLineList = ({
  onPress,
  onLongPress,
  icon,
  title = '',
  toggle,
  hasButton,
  onPressButton,
  isSub,
  hasArrow,
  onPressDrag,
}) => {
  return (
    <Sv
      as={TouchableOpacity}
      onLongPress={onLongPress && onLongPress}
      onPress={onPress && onPress}
      bg={isSub && colors.g7}>
      <Sv py={16} row jsb act onPress={onPress}>
        {icon && <Sv mr={4}>{icon}</Sv>}
        <St b1 g0 ml={isSub && 24}>
          {title}
        </St>
        <Sv row act>
          {hasButton && (
            <Sv as={TouchableOpacity} onPress={onPressButton}>
              <St b2 primary>
                키워드 추가
              </St>
            </Sv>
          )}
          {toggle}
        </Sv>
      </Sv>
    </Sv>
  );
};

const S = {};

S.Switch = styled(Switch)``;

S.BallImage = styled(Image)`
  width: ${n(20)}px;
  height: ${n(20)}px;
`;
