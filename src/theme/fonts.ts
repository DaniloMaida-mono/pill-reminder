import {TextStyle} from 'react-native';

export const fontSize = {
  title: 45,
  titleSecondary: 22,
  text: 16,
  smallText: 12,
};

type FontWeight = {
  [k: string]: TextStyle['fontWeight'];
};
export const fontWeight: FontWeight = {
  regular: 'normal',
  bold: '700',
  semiBold: '500',
};

export const fontStyle = {
  regular: {
    fontFamily: fontWeight.regular,
  },

  bold: {
    fontWeight: fontWeight.bold,
  },
  semiBold: {
    fontFamily: fontWeight.semiBold,
  },
};

export const textStyle = {
  title: {
    fontSize: fontSize.title,
  },
  titleSecondary: {
    fontSize: fontSize.titleSecondary,
  },
  text: {
    fontSize: fontSize.text,
  },
  smallText: {
    fontSize: fontSize.smallText,
  },
};
