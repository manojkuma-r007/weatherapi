import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import WrapperContainer from '../../components/wrapperContainer';
import FontFamily from '../../constants/FontFamily';
import TodayWeatherInfoComponent from '../../components/TodayWeatherInfoComponent'

import ImagePath from '../../constants/ImagePath';
// import { FlatList } from 'react-native/types_generated/index';
// import { StyleSheet } from 'react-native/types_generated/index';

const Home = () => {
  const navigation = useNavigation();

  const weekWeather = [
    { day: "Monday", weather: "Sunny", temperature: "38/28" },
    { day: "Tuesday", weather: "Cloudy", temperature: "30/18" },
    { day: "Wednesday", weather: "Rainy", temperature: "28/19" },
    { day: "Thursday", weather: "Cloudy", temperature: "32/21" },
    { day: "Friday", weather: "Sunny", temperature: "35/22" },
    { day: "Saturday", weather: "Rainy", temperature: "29/20" },
    { day: "Sunday", weather: "Sunny", temperature: "31/19" },
  ];
  return (

    <WrapperContainer>
      <ScrollView>
        <View style={styles.mainStyle}>
          <Text style={styles.textStyle}>{"helllo"}</Text>
          <Text style={styles.changeText}>{"Change of the rain 0%"}</Text>
          <Image style={styles.centreImage} source={ImagePath.sun} />
          <Text style={{ ...styles.textStyle, marginTop: 32 }}> {"31°"}</Text>


          <View >
            <TodayWeatherInfoComponent />
              <View
              style={{
                marginTop: 20,
                backgroundColor: '#1f242d',
                paddingHorizontal: 12,
                paddingVertical: 16,
                borderRadius: 14,
                marginBottom: 40,
              }}>
              <View style={{ marginBottom: 20 }}>
                <Text style={{ color: 'white' }}>7-DAYS FORECAST</Text>
              </View>
              {weekWeather.map((item, index) => (
                <View key={index}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderBottomWidth: item?.day === 'Sunday' ? 0 : 0.6,
                      paddingBottom: 12,
                      borderColor: 'white',
                    }}>
                    <Text style={{ ...styles.weekName, width: '25%' }}>
                      {item.day?.substring(0, 3)}
                    </Text>
                    <Image
                      style={{ width: 24, height: 24, resizeMode: 'contain' }}
                      source={ImagePath.sun}
                    />
                    <Text style={styles.weekName}>{item.weather}</Text>
                    <Text style={styles.weekName}>{item.temperature}</Text>
                  </View>
                  {index < weekWeather.length - 1 && (
                    <View style={{ height: 12 }} />
                  )}
                </View>
              ))}
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                paddingHorizontal: 20,
                paddingVertical: 16,
                borderRadius: 14,
                alignItems: 'center',
                marginBottom: 20,
              }}
              onPress={() => navigation.navigate('DetailsScreen')}
            >
              <Text style={{ ...styles.weekName, color: 'black' }}>More Details</Text>
            </TouchableOpacity>

          </View>
        </View>

      </ScrollView>
    </WrapperContainer>

  );
};

export default Home;

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    alignItems: 'center',
  },
  textStyle: {
    fontFamily: FontFamily.bold,
    fontSize: 24,
    color: 'white',
    marginTop: 12,
  },
  changeText: {
    fontFamily: FontFamily.bold,
    fontSize: 14,
    color: 'grey',
    marginTop: 4,
  },
  centreImage: {
    marginTop: 32,
    width: 120,
    height: 120,
  },

  weekName: {
    color: 'grey',
    fontFamily: FontFamily.medium,
    fontSize: 16,
  }
})