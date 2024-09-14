import localFont from 'next/font/local';

export const firaGo = localFont({
  src: [
    {
      path: './FiraGO-Regular.woff',
      weight: '400',
    },
    {
      path: './FiraGO-Medium.woff',
      weight: '500',
    },
    {
      path: './FiraGO-Bold.woff',
      weight: '700',
    },
  ],
  variable: '--font-firago',
});

export const helvetica = localFont({
  src: [
    {
      path: './Helvetica-Regular.woff',
      weight: '400',
    },
    {
      path: './Helvetica-Bold.woff',
      weight: '700',
    },
  ],
  variable: '--font-helvetica',
});

export const helveticaNeue = localFont({
  src: './HelveticaNeue-Medium.woff',
  weight: '500',
  variable: '--font-helveticaNeue',
});
