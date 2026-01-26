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