import {colors} from '@app/theme/colors';
import {fontStyle, textStyle} from '@app/theme/fonts';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Pills from '@assets/img/pills.svg';
import Arrow from '@assets/img/right-arrow.svg';
type Props = {
  text: string;
  time: string;
  eatingInfo: string;
};
function PlansListItem({text, time, eatingInfo}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.itemsContainer}>
        <Pills
          style={styles.icon}
          fill={colors.darkerGrey}
          width={20}
          height={20}
        />
        <View>
          <Text style={[textStyle.text, fontStyle.bold, styles.title]}>
            {text}
          </Text>
          <Text style={[textStyle.smallText, fontStyle.bold, styles.time]}>
            {' '}
            {time}
          </Text>
        </View>
        <Arrow
          style={styles.arrow}
          fill={colors.darkerGrey}
          width={15}
          height={15}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
  },

  itemsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    color: colors.black,
  },
  time: {
    color: colors.darkerGrey,
  },
  icon: {
    marginRight: 15,
  },
  arrow: {
    marginLeft: 'auto',
  },
});
export default PlansListItem;
