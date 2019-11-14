///<reference path="../common/Theme.d.ts"/>


interface Global {
  iOS:boolean,
  Android:boolean,
  WINDOW_WIDTH:number,
  WINDOW_HEIGHT:number,
  isIPhoneX:boolean,
  FONT_SIZE:(size:number) => number,
  px2dp:(px:number) => number,
  Theme:ThemeD
}

declare var global:Global;
