import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WrapperContainer from '../../components/wrapperContainer';
import FontFamily from '../../constants/FontFamily';
import ImagePath from '../../constants/ImagePath';

const DetailsScreen = () => {
  const navigation = useNavigation();

  const metrics = [
    { label: 'UV INDEX', value: '3' },
    { label: 'WIND', value: '0.2 km/h' },
    { label: 'HUMIDITY', value: '56%' },
    { label: 'VISIBILITY', value: '12 km' },
    { label: 'FEELS LIKE', value: '30°' },
    { label: 'CHANCE OF RAIN', value: '0%' },
    { label: 'PRESSURE', value: '1008 hPa' },
    { label: 'SUNSET', value: '20:58' },
  ];

  return (
    <WrapperContainer>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={styles.backBtnText}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Air Conditions</Text>
          <View style={{ width: 24 }} /> {/* Placeholder for balance */}
        </View>

        {/* Location Info */}
        <View style={styles.locationContainer}>
          <Text style={styles.cityName}>Madrid</Text>
          <Text style={styles.chanceOfRain}>Chance of rain: 0%</Text>
        </View>

        {/* Main Weather */}
        <View style={styles.mainWeatherContainer}>
          <Image source={ImagePath.sun} style={styles.weatherIcon} />
          <View style={styles.tempContainer}>
            <Text style={styles.tempText}>31°</Text>
            
          </View>
        </View>

        {/* Metrics Grid */}
        <View style={styles.gridContainer}>
          {metrics.map((item, index) => (
            <View key={index} style={styles.gridItem}>
              <Text style={styles.gridLabel}>{item.label}</Text>
              <Text style={styles.gridValue}>{item.value}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </WrapperContainer>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  backBtn: {
    padding: 8,
  },
  backBtnText: {
    color: 'white',
    fontSize: 24,
    fontFamily: FontFamily.bold,
  },
  headerTitle: {
    color: 'white',
    fontSize: 16,
    fontFamily: FontFamily.bold,
  },
  locationContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  cityName: {
    color: 'white',
    fontSize: 32,
    fontFamily: FontFamily.bold,
  },
  chanceOfRain: {
    color: '#8b94a5',
    fontSize: 14,
    fontFamily: FontFamily.medium,
    marginTop: 4,
  },
  mainWeatherContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  weatherIcon: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
  },
  tempContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 20,
  },
  tempText: {
    color: 'white',
    fontSize: 64,
    fontFamily: FontFamily.bold,
    lineHeight: 64,
  },
  redDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ff3b3b',
    marginTop: 12,
    marginLeft: 4,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    backgroundColor: '#1f242d',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    justifyContent: 'center',
  },
  gridLabel: {
    color: '#8b94a5',
    fontSize: 12,
    fontFamily: FontFamily.medium,
    marginBottom: 8,
  },
  gridValue: {
    color: 'white',
    fontSize: 18,
    fontFamily: FontFamily.bold,
  },
});
