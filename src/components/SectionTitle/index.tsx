import {colors} from '@app/theme/colors';
import {fontSize, fontStyle, fontWeight, textStyle} from '@app/theme/fonts';
import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';

type Props = {
  text: string;
  isWithSecondary?: boolean;
  secondaryText?: string;
  subSection?: boolean;
  style?: StyleProp<ViewStyle>;
};

function SectionTitle({
  text,
  isWithSecondary = false,
  secondaryText = '',
  subSection = false,
  style = {},
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
    <View style={[styles.container, style]}>
      <Text
        style={[
          !subSection ? textStyle.title : textStyle.titleSecondary,
          fontStyle.bold,
          {color: colors.black},
        ]}>
        {text}
      </Text>
      {renderSecondaryText()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginBottom: 30},
});
export default SectionTitle;
