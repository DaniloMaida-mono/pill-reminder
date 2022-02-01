import {RootStackParamList} from '@app/navigation';
import {ApplicationState} from '@app/types/store';
import withApplicationState from '@app/withApplicationState';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import PlanBox from '../PlanBox';
import PlansList from '../PlansList';

import SearchInput from '../SearchInput';
import SectionTitle from '../SectionTitle';

type Props = {
  state: ApplicationState;
  navigation: NativeStackScreenProps<RootStackParamList, 'Home'>['navigation'];
};
function Home(props: Props) {
  const [searchValue, setSearchValue] = useState('');

  const handlePress = (id: string) => {
    props.navigation.navigate('Edit', {
      id: id,
    });
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
        <PlansList data={props.state.plans} onPress={handlePress} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  sectionContainer: {
    paddingTop: 30,
  },
});

export default withApplicationState(Home);
