/**
 * @format
 */

import {AppRegistry, Text} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React, {Suspense, useEffect, useRef, useState} from 'react';
import {RecoilRoot} from 'recoil';

const AppWrapper = () => {
  return (
    <RecoilRoot>
      <Suspense fallback={<Text>로딩 중...</Text>}>
        <App />
      </Suspense>
    </RecoilRoot>
  );
};

AppRegistry.registerComponent(appName, () => AppWrapper);
