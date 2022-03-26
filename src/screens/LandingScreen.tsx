import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import React, { useEffect, useState } from 'react'
import RNLocation, { RNLocationNativeInterface } from 'react-native-location';

const LandingScreen = () => {

  const [location, setLocation] = useState<RNLocationNativeInterface>(null);

  useEffect(() => {
    // RNLocation.requestPermission({
    //   ios: "whenInUse",
    //   android: {
    //     detail: "coarse"
    //   }
    // }).then(granted => {
    //     if (granted) {
    //       this.locationSubscription = RNLocation.subscribeToLocationUpdates(locations => {console.log(locations)})
    //     }
    //   })
      RNLocation.getLatestLocation({ timeout: 60000 })
      .then(latestLocation => {
        console.log(latestLocation);
      })
  } , [])

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/delivery_icon.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.addressText}>130 Nguyen Van Thuong, Ward 25, Binh Thanh, Ho Chi Minh City</Text>
    </View>
  )
}

export default LandingScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 120,
      height: 120,
    },
    addressText: {
      fontSize: 16,
      color: '#000',
      marginTop: 20,
      paddingHorizontal: 20,
      textAlign: 'center',
    }
  });