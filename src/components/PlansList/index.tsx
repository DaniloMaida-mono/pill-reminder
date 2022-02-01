import {FormState} from '@app/types/form';
import {amPmFormatter} from '@app/utils/dateFormatter';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import PlansListItem from '../PlansListItem';

type Props = {
  onPress: Function;
  data: FormState[];
};
function PlansList({onPress, data}: Props) {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onPress(item.id)}
          style={styles.item}>
          <PlansListItem
            text={item.name}
            time={amPmFormatter(item.notification).toUpperCase()}
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
