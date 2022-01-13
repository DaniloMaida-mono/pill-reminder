import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchInput from '../SearchInput';
import SectionTitle from '../SectionTitle';

function Home() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <View style={styles.container}>
      <SearchInput
        value={searchValue}
        placeHolder="Search"
        onChange={(v: string) => setSearchValue(v)}
      />

      <View style={styles.sectionContainer}>
        <SectionTitle text="Hello, Danilo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  sectionContainer: {
    marginTop: 30,
  },
});

export default Home;
