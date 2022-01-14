import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PlanBox from '../PlanBox';

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
        <SectionTitle
          text="Hello,"
          isWithSecondary={true}
          secondaryText="Danilo"
        />
        <View style={styles.planBoxContainer}>
          <PlanBox total={4} completed={1} />
        </View>
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
  planBoxContainer: {
    marginTop: 30,
  },
});

export default Home;
