import React, {useReducer} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SectionTitle from '../SectionTitle';
import InputText from '../TextInput';
import PillsIcon from '@assets/img/pills.svg';
import CalendarIcon from '@assets/img/calendar.svg';

import {colors} from '@app/theme/colors';
import TouchIcon from '../TouchIcon';
import {ActionTypes} from '@app/types/form';
import {Icon} from '@app/types/generic';
import {reducer} from './reducer';
import {foodItems, initialFormState} from '@app/items/form';
import {textStyle} from '@app/theme/fonts';

function PlanForm() {
  const icons: Icon = {
    pills: <PillsIcon width={20} height={20} fill={colors.darkerGrey} />,
    calendar: <CalendarIcon width={20} height={20} fill={colors.darkerGrey} />,
  };

  const [state, dispatch] = useReducer(reducer, initialFormState);
  const handleFoodChange = (value: number) => {
    dispatch({type: ActionTypes.setPillsEatingTime, payload: value});
  };

  const handleChangeInput = (action: ActionTypes, value: number | string) => {
    dispatch({type: action, payload: value});
  };

  const handleSubmit = () => {
    console.log('submit');
  };

  return (
    <ScrollView style={styles.container}>
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
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={[textStyle.text, {color: colors.white}]}>Done</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 150,
  },
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
