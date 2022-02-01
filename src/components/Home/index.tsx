import {RootStackParamList} from '@app/navigation';
import {ApplicationState} from '@app/types/store';
import withApplicationState from '@app/withApplicationState';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import PlanBox from '../PlanBox';
import PlansList from '../PlansList';
import SearchIcon from '@assets/img/search-icon.svg';
import SectionTitle from '../SectionTitle';
import InputText from '../TextInput';

type Props = {
  state: ApplicationState;
  navigation: NativeStackScreenProps<RootStackParamList, 'Home'>['navigation'];
};
function Home(props: Props) {
  const [searchValue, setSearchValue] = useState('');
  const [plans, setPlans] = useState([...props.state.plans]);
  const searchIcon = (
    <SearchIcon style={styles.searchIcon} width={15} fill="#000" />
  );
  const handlePress = (id: string) => {
    props.navigation.navigate('Edit', {
      id: id,
    });
  };

  useEffect(() => {
    const allPlans = [...props.state.plans];
    const results = allPlans.filter(plan =>
      plan.name.toLowerCase().includes(searchValue)
    );
    setPlans(results);
  }, [props.state.plans, searchValue]);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <InputText
          value={searchValue}
          placeholder="Search"
          onChangeText={(v: string) => setSearchValue(v)}
          icon={searchIcon}
        />
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.sectionContainer}>
          <SectionTitle
            text="Hello,"
            isWithSecondary={true}
            secondaryText="Danilo"
          />
          <PlanBox total={4} completed={1} />
        </View>
        <View style={[styles.sectionContainer, styles.container]}>
          <SectionTitle text="Daily review" subSection={true} />
          <PlansList data={plans} onPress={handlePress} />
        </View>
      </ScrollView>
    </View>
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
  searchContainer: {
    paddingBottom: 20,
  },
  searchIcon: {
    padding: 10,
  },
});

export default withApplicationState(Home);
