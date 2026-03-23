import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import WrapperContainer from '../../components/wrapperContainer';
import FontFamily from '../../constants/FontFamily';
import { useNavigation } from '@react-navigation/native';
import { Swipeable } from 'react-native-gesture-handler';
// import { StyleSheet } from 'react-native/types_generated/index';
// import { Color } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';

const MyCityScreen = () => {

  const navigation = useNavigation()

  const [data,setData] =useState( [
    {
      id: 1,
      city: 'chennai',
      temparature: 33,
      time: 2,
      isCurrentLocation: true,
    },
    {
      id: 2,
      city: 'madurai',
      temparature: 33,
      time: 2,
      isCurrentLocation: false,
    },
    {
      id: 3,
      city: 'coim',
      temparature: 33,
      time: 2,
      isCurrentLocation: false,
    },
    {
      id: 4,
      city: 'tvl',
      temparature: 33,
      time: 2,
      isCurrentLocation: false,
    }
  ])

  const deleteItem=(id)=>{
    const newData=data.filter((item)=>item.id !==id)
    setData(newData)
  }

  const renderRightAction=(item)=>{
    return (
      <TouchableOpacity
      style={{
        backgroundColor:"red",
        justifyContent:"center",
        alignItems:"center",
        width:82,
        borderRadius:14,
      }}
      onPress={() => deleteItem(item?.id)}
      >
        <Text
        style={{
          color:"white",
          fontFamily:FontFamily.bold,
          fontSize:25,
        }}
        >X</Text>
      </TouchableOpacity>
    );
  }
  return (
    <WrapperContainer>
      <ScrollView>
        <Text style={styles.headerTextStyle}>My Cities</Text>

        <TouchableOpacity

          style={styles.searchButtonStyle}
          onPress={() => navigation.navigate('SearchScreen')}
        >
          <Text style={styles.searchTextStyle}>Search for cities</Text>


        </TouchableOpacity>
        <FlatList
          scrollEnabled={false}
          style={{
            marginTop: 20,

          }}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
          renderItem={({ item, index }) => {
            return (
              <Swipeable
              renderRightActions={() => renderRightAction(item)}
              >
              <View
                style={{
                  // marginTop:20,
                  flexDirection: 'row',
                  backgroundColor: "#1f242d",
                  borderRadius: 14,
                  height: 82,
                  justifyContent: 'space-between',
                  alignItems: "center",
                  paddingHorizontal: 20,

                }}

              >
                <View >
                  <Text style={styles.searchCityTextStyle}>
                    {item.city}
                  </Text>
                  <Text style={styles.searchTextStyle}>
                    {item.time}
                  </Text>
                </View>
                <Text style={styles.headerTextStyle}>
                  {item.temparature}°
                </Text>
              </View>
              </Swipeable>
            )
          }}
        />
      </ScrollView>
    </WrapperContainer>
  );
};

export default MyCityScreen;

const styles = StyleSheet.create({

  headerTextStyle: {

    color: "white",
    fontFamily: FontFamily.bold,
    fontSize: 30,
    // marginTop: 8,
    // padding: 20


  },
  searchButtonStyle: {
    backgroundColor: '#1f242d',
    height: 54,
    borderRadius: 16,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 10,
    // padding:20,
  },
  searchTextStyle: {
    color: "white",
    fontFamily: FontFamily.bold,
    fontSize: 14,

  },
  searchCityTextStyle: {
    color: "white",
    fontFamily: FontFamily.bold,
    fontSize: 18,



  }
})