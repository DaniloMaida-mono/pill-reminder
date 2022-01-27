import {colors} from '@app/theme/colors';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {SvgProps} from 'react-native-svg';
import WrapperCard from '../WrapperCard';

type Props = {
  onPress: (v: number) => void;
  icon: React.FC<SvgProps>;
  active: boolean;
  value: number;
};
function TouchIcon({onPress, icon, active, value}: Props) {
  return (
    <TouchableOpacity onPress={() => onPress(value)}>
      <WrapperCard style={[active && styles.activeBg, styles.container]}>
        {icon({
          width: 50,
          height: 50,
          fill: active ? colors.white : colors.darkerGrey,
        })}
      </WrapperCard>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeBg: {
    backgroundColor: colors.green,
  },
});

export default TouchIcon;
