import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import PlansListItem from '../PlansListItem';

type Props = {
  onPress: Function;
};
function PlansList({onPress}: Props) {
  const data = [
    {text: 'Devin', time: '10:00 AM', eatingInfo: 'Before eating', id: 1},
    {text: 'Dan', time: '10:00 AM', eatingInfo: 'Before eating', id: 2},
    {text: 'Dominic', time: '10:00 AM', eatingInfo: 'Before eating', id: 3},
    {text: 'Jackson', time: '10:00 AM', eatingInfo: 'Before eating', id: 4},
    {text: 'James', time: '10:00 AM', eatingInfo: 'Before eating', id: 5},
    {text: 'Joel', time: '10:00 AM', eatingInfo: 'Before eating', id: 6},
    {text: 'John', time: '10:00 AM', eatingInfo: 'Before eating', id: 7},
    {text: 'Jillian', time: '10:00 AM', eatingInfo: 'Before eating', id: 8},
    {text: 'Jimmy', time: '10:00 AM', eatingInfo: 'Before eating', id: 9},
    {text: 'Julie', time: '10:00 AM', eatingInfo: 'Before eating', id: 10},
  ];
  return (
    <View style={styles.container}>
      {data.map(item => (
        <TouchableOpacity
          key={item.id}
          onPress={() => onPress(item.id)}
          style={styles.item}>
          <PlansListItem
            text={item.text}
            time={item.time}
            eatingInfo={item.eatingInfo}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    paddingBottom: 20,
  },
});

export default PlansList;
