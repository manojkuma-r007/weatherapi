import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import FontFamily from '../constants/FontFamily';
import ImagePath from '../constants/ImagePath';


const TodayWeatherInfoComponent = () => {
  return (

    <View style={styles.mainStyle}>

      <Text style={styles.titleTextStyle}>TODAY'S FORCAST</Text>
      <View style={styles.containView}>

        <View style={styles.itemStyleView}>
          <Text style={styles.timeTextStyle}>{"9.00 AM"}</Text>
          <Image
            style={styles.cloudSun}
            source={ImagePath.cloudsun} />
            <Text style={{...styles.timeTextStyle,marginTop:10}}>{'25°'}</Text>
        </View>
{}
        <View style={styles.itemStyleView}>
          <Text style={styles.timeTextStyle}>{"9.00 AM"}</Text>
          <Image
            style={styles.cloudSun}
            source={ImagePath.sun} />
            <Text style={{...styles.timeTextStyle,marginTop:10}}>{'28°'}</Text>
        </View>

        <View style={{ ...styles.itemStyleView, borderRightWidth: 0 }}>

          <Text style={styles.timeTextStyle}>{"9.00 AM"}</Text>
          <Image
            style={styles.cloudSun}
            source={ImagePath.sun} />
            <Text style={{...styles.timeTextStyle,marginTop:10}}>{'33°'}</Text>
        </View>

      </View>

    </View>


  );
};

export default TodayWeatherInfoComponent;

const styles = StyleSheet.create({
  mainStyle: {
    backgroundColor: '#332f2f',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 8,
    height: 200,
    width: '100%',
    marginTop: 10,
    paddingHorizontal:14,
  },
  titleTextStyle: {
    fontFamily: FontFamily.medium,
    fontSize: 15,
    color: "grey"
  },
  containView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:16,
    marginHorizontal:4,
    alignSelf:'center',

  },
  timeTextStyle: {
    color: 'grey',
    fontFamily: FontFamily.medium,
    fontSize: 14,

  },
  itemStyleView: {
    borderRightWidth: 0.3,
    borderColor: 'white',
    alignItems:'center',
    paddingHorizontal:20,
    

  },
  cloudSun: {
    marginTop:10,
    width: 42,
    height: 42,
    resizeMode: 'contain'
  }

})