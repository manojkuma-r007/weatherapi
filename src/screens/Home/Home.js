import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import WrapperContainer from '../../components/wrapperContainer';
import FontFamily from '../../constants/FontFamily';
import TodayWeatherInfoComponent from '../../components/TodayWeatherInfoComponent'

import ImagePath from '../../constants/ImagePath';
import axios from 'axios';
import { Current_Api } from '../../cofig/urls'
import { Forecast_Api } from '../../cofig/urls'



const Home = () => {
  const navigation = useNavigation();

  const [currentLatlong, setCurrentLatlong] = useState('13.0843,80.2705');
  const [currentLocationData, setcurrentLocationData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const weekWeather = [
    { day: "Monday", weather: "Sunny", temperature: "38/28" },
    { day: "Tuesday", weather: "Cloudy", temperature: "30/18" },
    { day: "Wednesday", weather: "Rainy", temperature: "28/19" },
    { day: "Thursday", weather: "Cloudy", temperature: "32/21" },
    { day: "Friday", weather: "Sunny", temperature: "35/22" },
    { day: "Saturday", weather: "Rainy", temperature: "29/20" },
    { day: "Sunday", weather: "Sunny", temperature: "31/19" },
  ];

  const callTheForecastApi = async () => {
    try {
      const res = axios.get(Forecast_Api(currentLatlong, 1)).then((res) => {
        console.log(res, 'forecast');
        setForecastData(res);
      })
    } catch (error) {
      console.log(error, 'errorforecast');
    }
  };

  const callTheCurrentApi = async () => {
    try {
      const res = axios.get(Current_Api(currentLatlong)).then((res) => {
        console.log(res, 'resss');
        setcurrentLocationData(res);
      })
    } catch (error) {
      console.log(error, 'error');
    }
  };

  useEffect(() => {
    callTheCurrentApi();
    callTheForecastApi();
  }, []);

  console.log(currentLocationData, 'currentLocationData')

  console.log(currentLocationData?.data?.current?.condition?.icon, 'currentLocationData?.data?.current?.is_day')

  console.log(forecastData?.data?.forecast?.forecastday[0].hour, 'forecastData')

  return (

    <WrapperContainer>
      <ScrollView>
        <View style={styles.mainStyle}>
          <Text style={styles.textStyle}>{currentLocationData?.data?.location?.name}</Text>
          <Text style={styles.changeText}>{`Change of the rain 0%:${currentLocationData?.data?.current?.precip_mm}`}</Text>
          <Image style={styles.centreImage} source={currentLocationData?.data?.current?.is_day == 0 ? ImagePath.sun : ImagePath.cloudsun} />
          <Text style={{ ...styles.textStyle, marginTop: 32 }}> {`${currentLocationData?.data?.current?.temp_c}°`}</Text>


          <View >
            <TodayWeatherInfoComponent data={forecastData?.data?.forecast?.forecastday}/>
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