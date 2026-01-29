import localFont from "next/font/local";

export const pretendard = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
});

export const azeretMono = localFont({
  src: [
    {path: '../assets/fonts/AzeretMono-Regular.woff2', weight: '400', style: 'normal'}, {path: '../assets/fonts/AzeretMono-Bold.woff2', weight: '700', style: 'normal'},
  ],
  variable: '--font-azeret-mono',
  display: 'swap',
});

export const AGENCYB = localFont({
  src: '../assets/fonts/AGENCYB.ttf',
  variable: '--font-agencyb',
  display: 'swap',
});

export const walkway = localFont({
  src: '../assets/fonts/Walkway rounded.ttf',
  variable: '--font-walkway',
  display: 'swap',
});

export const eightOne = localFont({
  src: '../assets/fonts/Eight One.ttf',
  variable: '--font-81',
  display: 'swap',
});