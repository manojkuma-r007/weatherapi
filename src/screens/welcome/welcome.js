import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import WrapperContainer from '../../components/wrapperContainer'
// import { Image } from 'react-native/types_generated/index';
import umbrella from '../../assets/image/umbrella.png'
import ImagePath from '../../constants/ImagePath'
import FontFamily from '../../constants/FontFamily'
// import { MMKV } from 'react-native-mmkv'
import { createMMKV } from 'react-native-mmkv';
import { useDispatch } from 'react-redux';
import { saveUserData } from '../../redux/reducers/authSlice';



const Welcome = () => {
  const dispatch = useDispatch()
  const storage = createMMKV();
  const saveToken = () => {

    storage.set('token', '1234567890');

    dispatch(saveUserData({
      userData: { name: 'manoj', Gender: 'male', Country: 'india' },
      isLogin: true,
    }))
  }
  return (

    <WrapperContainer>
      <View style={styles.mainStyle}>
        <View style={styles.header}>
          <Image source={ImagePath.umbrella} style={{ marginBottom: 20 }} />


          <Text style={styles.weatherTextstyle}>{'Weather App'}</Text>
          {/* <Text style={styles.textTitle}>{'App '}</Text> */}
        </View>

        <View style={styles.button}>
          <TouchableOpacity onPress={() => saveToken()}>
            <Image style={styles.imageBtnStyle} source={ImagePath.nextbutton} />
          </TouchableOpacity>
        </View>
      </View>
    </WrapperContainer>

  );
};

export default Welcome;

const styles = StyleSheet.create({
  mainStyle: {

    flex: 1,
    alignItems: 'center',
    // justifyContent:'center'
  },
  textTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 13,
    fontFamily: FontFamily.bold,


  },
  weatherTextstyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 13,
    fontFamily: FontFamily.bold,
  },
  button: {
    flex: 0.2,

    alignContent: 'center',
    justifyContent: 'center',
  },
  imageBtnStyle: {
    height: 42,
    // alignItems:'center',
    // justifyContent:'center',
    width: 42,
    marginBottom: 0,
  },
  header: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  }

})