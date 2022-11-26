import {atom} from 'recoil';
import {persistAtom} from './persist';

export const worriesAtom = atom({
  key: 'worriesAtom',
  default: [],
  effects_UNSTABLE: [persistAtom('worriesAtom')],
});

export const writingWorriesAtom = atom({
  key: 'writingWorriesAtom',
  default: [],
  effects_UNSTABLE: [persistAtom('writingWorriesAtom')],
});
