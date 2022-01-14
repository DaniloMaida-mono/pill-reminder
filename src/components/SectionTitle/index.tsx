import {colors} from '@app/theme/colors';
import {fontSize, fontStyle, fontWeight, textStyle} from '@app/theme/fonts';
import React from 'react';
import {Text, View} from 'react-native';

type Props = {
  text: string;
  isWithSecondary?: boolean;
  secondaryText?: string;
};

function SectionTitle({
  text,
  isWithSecondary = false,
  secondaryText = '',
}: Props) {
  const renderSecondaryText = () => {
    if (isWithSecondary && secondaryText) {
      return (
        <Text
          style={[textStyle.title, fontStyle.semiBold, {color: colors.black}]}>
          {secondaryText}
        </Text>
      );
    }
  };
  return (
    <View>
      <Text style={[textStyle.title, fontStyle.bold, {color: colors.black}]}>
        {text}
      </Text>
      {renderSecondaryText()}
    </View>
  );
}

export default SectionTitle;
