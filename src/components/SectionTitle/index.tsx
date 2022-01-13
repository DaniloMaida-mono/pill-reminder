import {colors} from '@app/theme/colors';
import {fontSize, fontStyle, textStyle} from '@app/theme/fonts';
import React from 'react';
import {Text} from 'react-native';

type Props = {
  text: string;
};

function SectionTitle({text}: Props) {
  return (
    <Text style={[fontStyle.bold, textStyle.title, {color: colors.black}]}>
      {text}
    </Text>
  );
}

export default SectionTitle;
