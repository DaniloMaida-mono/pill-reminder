import React, {useState} from 'react';
import {View, Platform, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import BellIcon from '@assets/img/bell.svg';
import InputText from '../TextInput';
import {colors} from '@app/theme/colors';

type Props = {
  onChange: (date: Date) => void;
  formatDisplayText?: Function;
};
const TimePicker = (props: Props) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const [text, setText] = useState(
    props.formatDisplayText ? props.formatDisplayText(date) : ''
  );
  const onChange = (event: Event, selectedDate?: Date) => {
    const currentDate = selectedDate || date;

    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    if (props.formatDisplayText) {
      setText(props.formatDisplayText(currentDate));
    }
    props.onChange(currentDate);
  };

  const showTimepicker = () => {
    setShow(true);
  };

  const bellIcon = <BellIcon width={20} height={20} fill={colors.darkerGrey} />;

  return (
    <View>
      <View>
        <TouchableOpacity onPress={showTimepicker}>
          <InputText
            icon={bellIcon}
            value={text.toUpperCase()}
            editable={false}
          />
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          value={date}
          mode="time"
          is24Hour={false}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default TimePicker;
