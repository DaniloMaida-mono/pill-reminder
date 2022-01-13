import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import SearchIcon from '@assets/img/search-icon.svg';
import {colors} from '@app/theme/colors';
import {fontSize} from '@app/theme/fonts';

type Props = {
  onChange: Function;
  value?: string;
  placeHolder?: string;
};
function SearchInput({onChange, value, placeHolder = ''}: Props) {
  return (
    <View style={styles.container}>
      <SearchIcon style={styles.searchIcon} width={15} fill="#000" />
      <TextInput
        style={styles.input}
        placeholder={placeHolder}
        onChangeText={(v: string) => onChange(v)}
        value={value}
        underlineColorAndroid="transparent"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.grey,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: fontSize.text,
    paddingLeft: 10,
    color: colors.black,
  },
});

export default SearchInput;
