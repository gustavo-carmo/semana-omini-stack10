import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

function Main() {

  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {

    async function loadInitialPosition() {

      const { granted } = await requestPermissionsAsync();

      
      if(granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03
        });
      }
    }

    loadInitialPosition();
  }, []);

  if(!currentRegion) {
    return null;
  }

  return (
    <MapView initialRegion={currentRegion} style={styles.map} >
      <Marker coordinate={{longitude: -47.3358854, latitude: -23.3915792}} />
      <Marker coordinate={{longitude: -47.3413094, latitude: -23.3888327}} />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
})

export default Main;