import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image, Pressable } from 'react-native';
import WrapperContainer from '../../components/wrapperContainer';
import ImagePath from '../../constants/ImagePath';
import FontFamily from '../../constants/FontFamily';
import { useNavigation } from '@react-navigation/native';

const dummyCities = [
  { id: '1', name: 'Barcelona', time: '10:23', temp: '29°', icon: ImagePath.sun },
  { id: '2', name: 'Bilbao', time: '10:23', temp: '27°', icon: ImagePath.storm },
  { id: '3', name: 'Madrid', time: '10:23', temp: '31°', icon: ImagePath.sun },
  { id: '4', name: 'Malaga', time: '10:23', temp: '33°', icon: ImagePath.cloudsun },
];

const SearchScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const renderCityItem = ({ item }) => (
    <View style={styles.cityCard}>
      <Image source={item.icon} style={styles.weatherIcon} />
      <View style={styles.cityInfo}>
        <Text style={styles.cityName}>{item.name}</Text>
        <Text style={styles.cityTime}>{item.time}</Text>
      </View>
      <Text style={styles.cityTemp}>{item.temp}</Text>
    </View>
  );

  return (
    <WrapperContainer>
      <View style={styles.container}>
        {/* Header / Search Bar */}
        <View style={styles.searchHeader}>
          <View style={styles.searchInputContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search city..."
              placeholderTextColor="#8e8e93"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
          <Pressable onPress={() => { setSearchQuery(""), navigation.goBack() }} style={styles.cancelButton}>
            <Text style={styles.cancelText}>Cancel</Text>
          </Pressable>
        </View>

        {/* City List */}
        <FlatList
          data={dummyCities}
          keyExtractor={(item) => item.id}
          renderItem={renderCityItem}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </WrapperContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#11151a',
  },
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  searchInputContainer: {
    flex: 1,
    backgroundColor: '#1E232E',
    borderRadius: 10,
    height: 48,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  searchInput: {
    color: '#FFFFFF',
    fontFamily: FontFamily.regular,
    fontSize: 16,
    paddingTop: 0,
    paddingBottom: 0,
    height: '100%',
  },
  cancelButton: {
    marginLeft: 15,
  },
  cancelText: {
    color: '#FFFFFF',
    fontFamily: FontFamily.medium,
    fontSize: 16,
  },
  listContainer: {
    paddingBottom: 20,
  },
  cityCard: {
    backgroundColor: '#1E232E',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  weatherIcon: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  cityInfo: {
    flex: 1,
    marginLeft: 15,
  },
  cityName: {
    color: '#FFFFFF',
    fontFamily: FontFamily.bold,
    fontSize: 16,
    marginBottom: 2,
  },
  cityTime: {
    color: '#8e8e93',
    fontFamily: FontFamily.regular,
    fontSize: 12,
  },
  cityTemp: {
    color: '#FFFFFF',
    fontFamily: FontFamily.regular,
    fontSize: 32,
  },
});

export default SearchScreen;