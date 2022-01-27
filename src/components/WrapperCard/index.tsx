import {colors} from '@app/theme/colors';
import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

type Props = {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

const WrapperCard: React.FC<Props> = props => (
  <View style={[styles.container, props.style]}>{props.children}</View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
});

export default WrapperCard;
