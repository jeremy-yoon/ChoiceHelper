import {NavigationContainer} from '@react-navigation/native';
import {RootNavigation} from './src/navigation/RootNavigation';
import RecoilNexus from 'recoil-nexus';
import React from 'react';
import {useRef} from 'react';

const App = () => {
  const navigationRef = useRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <RecoilNexus />
      <RootNavigation />
    </NavigationContainer>
  );
};

export default App;
