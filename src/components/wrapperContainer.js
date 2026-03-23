// import { Background } from '@react-navigation/elements';
import React from 'react';
import { View,StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const WrapperContainer=({children})=>{
    return(
        <SafeAreaView style={styles.mainstyle}>
            {/* <StatusBar
            
            /> */}
            <View style={styles.mainstyle}>
                
                {children}

            </View>
            
        </SafeAreaView>
    )


}
export default WrapperContainer;


const styles=StyleSheet.create({

    mainstyle:{
        flex:1,
        backgroundColor:'#1f1f1f',
    }
})
