import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

function PlansList() {
  return (
    <View style={styles.container}>
      <Text>Ciao</Text>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  item: {
    // padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default PlansList;
