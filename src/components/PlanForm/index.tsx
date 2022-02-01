import React, {useReducer} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SectionTitle from '../SectionTitle';
import InputText from '../TextInput';
import PillsIcon from '@assets/img/pills.svg';
import CalendarIcon from '@assets/img/calendar.svg';

import {colors} from '@app/theme/colors';
import TouchIcon from '../TouchIcon';
import {ActionTypes, FormState} from '@app/types/form';
import {Icon} from '@app/types/generic';
import {reducer} from './reducer';
import {foodItems, initialFormState} from '@app/items/form';
import {textStyle} from '@app/theme/fonts';
import TimePicker from '../TimePicker';
import {amPmFormatter} from '@app/utils/dateFormatter';

interface Props {
  onSubmit: (state: FormState) => void;
  formState?: FormState;
}

function PlanForm(props: Props) {
  const icons: Icon = {
    pills: <PillsIcon width={20} height={20} fill={colors.darkerGrey} />,
    calendar: <CalendarIcon width={20} height={20} fill={colors.darkerGrey} />,
  };

  const [state, dispatch] = useReducer(
    reducer,
    props.formState || initialFormState
  );
  const handleFoodChange = (value: number) => {
    dispatch({type: ActionTypes.setPillsEatingTime, payload: value});
  };

  const handleChangeInput = (
    action: ActionTypes,
    value: number | string | Date
  ) => {
    dispatch({type: action, payload: value});
  };

  const validateForm = () =>
    new Promise<void>((resolve, reject) => {
      Object.keys(state).forEach(key => {
        if (
          (!state[key as keyof FormState] && key !== 'eatingTime') ||
          (key === 'eatingTime' && state.eatingTime < 0)
        ) {
          return reject('Compila tutti i campi prima di procedere');
        }
      });
      resolve();
    });

  const handleSubmit = () => {
    validateForm()
      .then(() => {
        props.onSubmit({...state});
        dispatch({type: ActionTypes.resetForm, payload: initialFormState});
      })
      .catch((err: any) => {
        Alert.alert('Attenzione', err, [{style: 'cancel'}]);
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <SectionTitle text="Pills name" subSection={true} />
      <InputText
        icon={icons.pills}
        value={state.name}
        onChangeText={v => handleChangeInput(ActionTypes.setPillName, v)}
      />
      <SectionTitle
        style={styles.sectionSpace}
        text="Amount & How long?"
        subSection={true}
      />
      <View style={styles.flex}>
        <InputText
          style={styles.cardInputHalf}
          label="pills"
          icon={icons.pills}
          keyboardType="numeric"
          value={state.qty ? state.qty?.toString() : undefined}
          onChangeText={v =>
            handleChangeInput(ActionTypes.setPillsQuantity, parseInt(v, 10))
          }
        />
        <InputText
          style={styles.cardInputHalf}
          label="days"
          icon={icons.calendar}
          value={state.days ? state.days?.toString() : undefined}
          keyboardType="numeric"
          onChangeText={v =>
            handleChangeInput(ActionTypes.setPillsDay, parseInt(v, 10))
          }
        />
      </View>
      <SectionTitle
        style={styles.sectionSpace}
        text="Food & Pills?"
        subSection={true}
      />
      <View style={styles.flex}>
        {foodItems.map(el => (
          <TouchIcon
            key={el.value}
            active={state.eatingTime === el.value}
            icon={el.icon}
            value={el.value}
            onPress={handleFoodChange}
          />
        ))}
      </View>
      <View>
        <SectionTitle
          style={styles.sectionSpace}
          text="Notification"
          subSection={true}
        />
        <TimePicker
          onChange={(date: Date) =>
            handleChangeInput(ActionTypes.setNotification, date)
          }
          formatDisplayText={amPmFormatter}
          value={state.notification}
        />
      </View>

      <View>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={[textStyle.text, {color: colors.white}]}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  sectionSpace: {
    marginTop: 20,
  },
  cardInputHalf: {
    width: '45%',
  },
  submitButton: {
    backgroundColor: colors.green,
    padding: 15,
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 40,
  },
});

export default PlanForm;
