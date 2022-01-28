import React from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import WrapperCard from '../WrapperCard';
import {fontStyle, textStyle} from '@app/theme/fonts';
import {colors} from '@app/theme/colors';
type Props = {
  style?: StyleProp<ViewStyle>;
  icon?: JSX.Element;
  label?: string;
  value?: string;
  keyboardType?: KeyboardTypeOptions;
  onChangeText?: (text: string) => void;
  onFocus?: () => void;
  editable?: boolean;
};

const InputText: React.FC<Props> = props => {
  const {...rest} = props;

  return (
    <WrapperCard style={[styles.container, props.style]}>
      <View style={styles.icon}>{props.icon ? props.icon : null}</View>
      <TextInput
        style={[textStyle.text, fontStyle.bold, styles.text, styles.input]}
        {...rest}
      />
      {props.label ? (
        <Text style={[textStyle.text, fontStyle.bold, styles.text]}>
          {props.label}
        </Text>
      ) : null}
    </WrapperCard>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    marginRight: 20,
  },
  text: {
    color: colors.black,
  },
  input: {
    flex: 1,
  },
});

export default InputText;
