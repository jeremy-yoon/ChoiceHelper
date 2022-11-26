import {atom} from 'recoil';
import {persistAtom} from './persist';

export const isShowNavAtom = atom({
  key: 'isShowNavAtom',
  default: false,
  effects_UNSTABLE: [persistAtom('isShowNavAtom')],
});

export const isBGMPlayingAtom = atom({
  key: 'isBGMPlayingAtom',
  default: false,
  effects_UNSTABLE: [persistAtom('isBGMPlayingAtom')],
});

export const isOpenAdTreasureBoxAtom = atom({
  key: 'isOpenAdTreasureBoxAtom',
  default: false,
  // effects_UNSTABLE: [persistAtom('isOpenAdTreasureBoxAtom')],
});
