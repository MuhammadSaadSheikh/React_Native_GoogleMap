import React, { useEffect } from 'react'
import { View, Text, Button, Permission, PermissionStatus, PermissionsAndroid } from 'react-native'
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const App = () => {

  //podfile ios
  // pod 'react-native-maps', :path => '../node_modules/react-native-maps'

  //application java
  // import com.showlocationservicesdialogbox.LocationServicesDialogBoxPackage;
  // import com.airbnb.android.react.maps.MapsPackage;
  // import com.airbnb.android.react.maps.MapsPackage;

  //setting gradlw
  // include ':react-native-android-location-services-dialog-box'
  // project(':react-native-android-location-services-dialog-box').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-android-location-services-dialog-box/android')
  // include ':react-native-maps'
  // project(':react-native-maps').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-maps/lib/android')
  // include ':react-native-maps'
  // project(':react-native-maps').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-maps/lib/android')

  //package-lockjson


  useEffect(() => {
    // granted()
    Geolocation.getCurrentPosition(
      (position) => {
        console.log('position', position);
      },
      (error) => {
        // See error code charts below.
        console.log('position error', error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, [permisson])

  const permisson = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      {/* <Button title='Granted' onPress={granted}/> */}
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  )
}

export default App