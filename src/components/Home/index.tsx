import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PlanBox from '../PlanBox';
import PlansList from '../PlansList';

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
        <PlanBox total={4} completed={1} />
      </View>
      <View style={styles.sectionContainer}>
        <SectionTitle text="Daily review" subSection={true} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 30,
  },
});

export default Home;
