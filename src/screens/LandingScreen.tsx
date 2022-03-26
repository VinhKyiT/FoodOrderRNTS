import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import GetLocation from 'react-native-get-location';

const LandingScreen = () => {

  const [location, setLocation] = useState<GetLocation>('');

  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
  })
  .then(location => {
      console.log(location);
      setLocation(location);
  })
  .catch(error => {
      const { code, message } = error;
      console.warn(code, message);
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