import React from 'react';
import { View, Text,Image,StyleSheet, TouchableOpacity } from 'react-native';
// import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import WrapperContainer from '../../components/wrapperContainer'
// import { Image } from 'react-native/types_generated/index';
import umbrella from '../../assets/image/umbrella.png'
import ImagePath from '../../constants/ImagePath'
import FontFamily from '../../constants/FontFamily'


const welcome = () => {
  return (
   
    <WrapperContainer>
      <View style={styles.mainStyle}>
        <Image source={ImagePath.umbrella} />

        <Text style={styles.textTitle}>{'App Stack Engineer'}</Text>
        <Text style={styles.weatherTextstyle}>{'Weather'}</Text>

      </View>
      <View style={styles.button}>
        <TouchableOpacity>
        <Image style={styles.imageBtnStyle}source={ImagePath.nextbutton}/>
        </TouchableOpacity>
      </View>

    </WrapperContainer>
    
  );
};

export default welcome;

const styles=StyleSheet.create({
  mainStyle:{
    alignItems:'center',
    justifyContent:'center',
    flex:0.8,
  },
    textTitle:{
      fontSize:24,
      fontWeight:'bold',
      color:'white',
      marginTop:13,
      fontFamily:FontFamily.bold,


    },
    weatherTextstyle:{
      fontSize:24,
      fontWeight:'bold',
      color:'white',
      marginTop:13,
      fontFamily:FontFamily.bold,
    },
    button:{
      flex:0.2,
      
      alignContent:'center',
      justifyContent:'center',
    },
    imageBtnStyle:{
      height:32,
      width:32,
    },
  
})