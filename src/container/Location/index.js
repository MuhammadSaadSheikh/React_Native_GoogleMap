import React, { useEffect, useState } from 'react'
import { View, SafeAreaView } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import styles from './style'

const Location = () => {
    const [location, setLocation] = useState({
        latitude: 0,
        longitude: 0
    });
    console.log("🚀 ~ file: index.js ~ line 11 ~ Location ~ location", location)

    useEffect(() => {
        // checkIsLocation()
        Geolocation.getCurrentPosition(
            (position) => {
                console.log('position', position.coords);
                const { latitude, longitude } = position.coords
                setLocation({ latitude, longitude })
            },
            // (error) => {
            //     // See error code charts below.
            //     console.log('err', error.code, error.message);
            // },
            // { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
        // requestLocationPermission()

    }, [])

    return (
        <SafeAreaView style={styles.mainContainer}>
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker 
                draggable
                pinColor='red' 
                coordinate={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                }}
                    onDragEnd={e => console.log(e)}
                    onDragStart={e => console.log(e)}

                />
            </MapView>
        </SafeAreaView>
    )
}

export default Location