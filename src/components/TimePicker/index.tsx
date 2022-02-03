import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {TimePickerModal} from 'react-native-paper-dates';
import BellIcon from '@assets/img/bell.svg';
import InputText from '../TextInput';
import {colors} from '@app/theme/colors';
import 'intl';
import 'intl/locale-data/jsonp/en';
type Props = {
  onChange: (date: Date) => void;
  formatDisplayText?: Function;
  value?: Date;
};
const TimePicker = (props: Props) => {
  const [date, setDate] = useState(props.value || new Date());
  const [show, setShow] = useState(false);

  const [text, setText] = useState(
    props.formatDisplayText ? props.formatDisplayText(date) : ''
  );
  const onChange = React.useCallback(
    ({hours, minutes}) => {
      setShow(false);
      const time = new Date();
      time.setHours(hours);
      time.setMinutes(minutes);

      setDate(time);
      if (props.formatDisplayText) {
        setText(props.formatDisplayText(time));
      }
      props.onChange(time);
    },
    [props]
  );

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
        <TimePickerModal
          visible={show}
          onDismiss={() => setShow(false)}
          onConfirm={onChange}
          hours={date.getHours()} // default: current hours
          minutes={date.getMinutes()} // default: current minutes
          label="Select time" // optional, default 'Select time'
          uppercase={false} // optional, default is true
          cancelLabel="Cancel" // optional, default: 'Cancel'
          confirmLabel="Ok" // optional, default: 'Ok'
          animationType="fade" // optional, default is 'none'
        />
      )}
    </View>
  );
};

export default TimePicker;
