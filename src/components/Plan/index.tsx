import {RootStackParamList} from '@app/navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Alert, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import BackIcon from '@assets/img/back.svg';
import {colors} from '@app/theme/colors';
import SectionTitle from '../SectionTitle';
import PlanForm from '../PlanForm';
import withApplicationState from '@app/withApplicationState';
import {FormState} from '@app/types/form';
import {PlansActionTypes} from '@app/types/store';
import {showMessage} from 'react-native-flash-message';

type Props = {
  dispatch: ({type}: {type: string; payload?: any}) => void;
  navigation: NativeStackScreenProps<RootStackParamList, 'Plan'>['navigation'];
};
function Plan(props: Props) {
  const handleSubmit = (data: FormState) => {
    props.dispatch({type: PlansActionTypes.addPlan, payload: data});
    props.navigation.navigate('Home');
    showMessage({
      message: 'Piano creato correttamente!',
      type: 'success',
    });
  };
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.backIconContainer}
        onPress={() => props.navigation.navigate('Home')}>
        <BackIcon fill={colors.darkerGrey} height={30} width={30} />
      </TouchableOpacity>
      <SectionTitle text="Add Plan" />
      <PlanForm onSubmit={handleSubmit} />
    </ScrollView>
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

export default withApplicationState(Plan);
