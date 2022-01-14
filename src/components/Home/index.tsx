import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import PlanBox from '../PlanBox';
import PlansList from '../PlansList';

import SearchInput from '../SearchInput';
import SectionTitle from '../SectionTitle';

function Home() {
  const [searchValue, setSearchValue] = useState('');

  const handlePress = (id: string | number) => {
    console.log(id);
  };
  return (
    <ScrollView style={styles.container}>
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
        <PlansList onPress={handlePress} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 50,
  },
  sectionContainer: {
    marginTop: 30,
  },
});

export default Home;
