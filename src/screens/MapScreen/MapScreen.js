import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import WrapperContainer from '../../components/wrapperContainer';
// import MapView, { Marker } from 'react-native-maps';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
// import { StyleSheet } from 'react-native/types_generated/index';

const MapScreen = () => {

  const [region, setRegion] = useState({
    latitude: 13.0843,
    longitude: 80.2705,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })

  const [marker, setMarker] = useState([
    {
      id: 1,
      title: 'Chennai',
      description: 'Chennai',
      coordinate: {
        latitude: 13.0843,
        longitude: 80.2705,
      },
    },
    {
      id: 2,
      title: 'Madurai',
      description: 'Madurai',
      coordinate: {
        latitude: 9.9252,
        longitude: 78.1198,
      },
    },
    {
      id: 3,
      title: 'Coimbatore',
      description: 'Coimbatore',
      coordinate: {
        latitude: 11.0168,
        longitude: 76.9558,
      },
    },
    {
      id: 4,
      title: 'Tirunelveli',
      description: 'Tirunelveli',
      coordinate: {
        latitude: 8.7139,
        longitude: 77.7567,
      },
    },
  ]);
  return (
    <WrapperContainer>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        region={region}
      >
        {marker.map((item) => (
          <Marker
            key={item?.id}
            coordinate={item?.coordinate}
            title={item?.title}
            description={item?.description}
          />
        ))}

      </MapView>
    </WrapperContainer>
  );
};

export default MapScreen;