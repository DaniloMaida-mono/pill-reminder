import {RootStackParamList} from '@app/navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import BackIcon from '@assets/img/back.svg';
import {colors} from '@app/theme/colors';
import SectionTitle from '../SectionTitle';
import PlanForm from '../PlanForm';
function Plan({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Plan'>) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backIconContainer}
        onPress={() => navigation.navigate('Home')}>
        <BackIcon fill={colors.darkerGrey} height={30} width={30} />
      </TouchableOpacity>
      <SectionTitle text="Add Plan" />
      <PlanForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backIconContainer: {
    backgroundColor: colors.grey,
    alignSelf: 'flex-start',
    padding: 12,
    borderRadius: 20,
    marginBottom: 25,
  },
});

export default Plan;
