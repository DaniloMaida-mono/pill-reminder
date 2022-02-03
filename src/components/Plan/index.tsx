import {RootStackParamList} from '@app/navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Alert, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import notifee, {
  RepeatFrequency,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';

import BackIcon from '@assets/img/back.svg';
import {colors} from '@app/theme/colors';
import SectionTitle from '../SectionTitle';
import PlanForm from '../PlanForm';
import withApplicationState from '@app/withApplicationState';
import {FormState} from '@app/types/form';
import {PlansActionTypes} from '@app/types/store';
import {showMessage} from 'react-native-flash-message';
import {idGenerator} from '@app/utils/idGenerator';
import {onCreateTriggerNotification} from '@app/utils/notification';

type Props = {
  dispatch: ({type}: {type: string; payload?: any}) => void;
  navigation: NativeStackScreenProps<RootStackParamList, 'Plan'>['navigation'];
};
function Plan(props: Props) {
  const handleSubmit = (data: Omit<FormState, 'id'>) => {
    const dataWithId: FormState = {...data, id: idGenerator()};

    props.dispatch({type: PlansActionTypes.addPlan, payload: dataWithId});
    props.navigation.navigate('Home');
    showMessage({
      message: 'Piano creato correttamente!',
      type: 'success',
    });

    onCreateTriggerNotification(
      dataWithId,
      'pills-notification',
      RepeatFrequency.DAILY
    );
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
