import {RootStackParamList} from '@app/navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import BackIcon from '@assets/img/back.svg';
import {colors} from '@app/theme/colors';
import SectionTitle from '../SectionTitle';
import PlanForm from '../PlanForm';
import withApplicationState from '@app/withApplicationState';
import {FormState} from '@app/types/form';
import {ApplicationState, PlansActionTypes} from '@app/types/store';
import {showMessage} from 'react-native-flash-message';
import {RouteProp} from '@react-navigation/native';
import {onCreateTriggerNotification} from '@app/utils/notification';
import {RepeatFrequency} from '@notifee/react-native';

type Props = {
  state: ApplicationState;
  dispatch: ({type}: {type: string; payload?: any}) => void;
  navigation: NativeStackScreenProps<RootStackParamList, 'Edit'>['navigation'];
  route: RouteProp<RootStackParamList, 'Edit'>;
};
function EditPlan(props: Props) {
  const [id] = useState(props.route.params.id);

  const plan = props.state.plans.filter(el => el.id === id)[0];
  const handleSubmit = (data: FormState) => {
    props.dispatch({type: PlansActionTypes.editPlan, payload: {id, data}});
    props.navigation.navigate('Home');
    showMessage({
      message: 'Piano modifcato correttamente!',
      type: 'success',
    });

    if (plan.notification.getTime() !== data.notification.getTime()) {
      onCreateTriggerNotification(
        data,
        'pills-notification',
        RepeatFrequency.DAILY
      );
    }
  };
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.backIconContainer}
        onPress={() => props.navigation.navigate('Home')}>
        <BackIcon fill={colors.darkerGrey} height={30} width={30} />
      </TouchableOpacity>
      <SectionTitle text="Edit Plan" />
      <PlanForm onSubmit={handleSubmit} formState={plan} />
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

export default withApplicationState(EditPlan);
