import {colors} from '@app/theme/colors';
import {fontStyle, textStyle} from '@app/theme/fonts';
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

type Props = {
  total: number;
  completed: number;
};
function PlanBox({total, completed}: Props) {
  return (
    <View style={styles.container}>
      <Image source={require('@assets/img/flamenco.png')} style={styles.img} />
      <View>
        <Text style={[textStyle.titleSecondary, fontStyle.bold, styles.title]}>
          Your plan {'\n'} for today
        </Text>
        <Text style={[textStyle.smallText]}>
          {completed} of {total} completed
        </Text>
        <Text style={[textStyle.text, styles.showMore]}>Show more</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: colors.yellow,
  },

  img: {
    position: 'absolute',
    top: -200,
    left: 150,
  },

  title: {
    color: colors.black,
    marginBottom: 10,
  },
  showMore: {
    color: colors.red,
    alignSelf: 'flex-start',
    borderBottomWidth: 2,
    borderBottomColor: colors.red,
    paddingBottom: 5,
    marginTop: 30,
  },
});

export default PlanBox;
