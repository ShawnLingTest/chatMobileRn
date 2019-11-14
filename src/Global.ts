import { Platform, Dimensions } from 'react-native';
import { FontSize } from './utils/FontSize';
import { Px2Dp } from './utils/Tool';
import Theme from "./common/Theme";


const {width: D_WIDTH, height: D_HEIGHT} = Dimensions.get('window');


const X_WIDTH = 375;
const X_HEIGHT = 812;
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;


const isIPhoneX = (() => {
  if (Platform.OS === 'web') return false;
  return (
    Platform.OS === 'ios' &&
    ((D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH) ||
      (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT)) ||
    ((D_HEIGHT === XSMAX_HEIGHT && D_WIDTH === XSMAX_WIDTH) ||
      (D_HEIGHT === XSMAX_WIDTH && D_WIDTH === XSMAX_HEIGHT))
  );
})();


global.iOS = Platform.OS === 'ios';

global.Android = Platform.OS === 'android';

global.WINDOW_HEIGHT = D_HEIGHT;

global.WINDOW_WIDTH = D_WIDTH;

global.isIPhoneX = isIPhoneX;

global.FONT_SIZE = FontSize;

global.px2dp = Px2Dp;

global.Theme = Theme;

