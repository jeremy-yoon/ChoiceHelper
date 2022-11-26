import {atom} from 'recoil';
// import { recoilPersist } from "recoil-persist";
// import { persistAtomEffect } from "recoil/helper";
import {persistAtom} from './persist';

// const { persistAtom } = recoilPersist();

export const userAtom = atom({
  key: 'userAtom',
  default: null,
  effects_UNSTABLE: [persistAtom('userAtom')],
});
