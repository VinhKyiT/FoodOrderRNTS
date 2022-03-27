import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import GetLocation, { Location } from 'react-native-get-location';
import { useNavigation } from '@react-navigation/native';

const LandingScreen = () => {
  const [location, setLocation] = useState<Location>();
  const [address, setAddress] = useState<string>('');

  const navigation = useNavigation();

  const getAddress = async (geo: Location) => {
    const { latitude, longitude } = geo;
    const url = `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${latitude}%2C${longitude}&lang=en-USS&apikey=n062bSuYVxYLK_qIze9RN29PnlEVImx8aeJgZikqd5Y`;
    const response = await fetch(url);
    const data = await response.json();
    setAddress(data.items[0].title);
  };

  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(geocode => {
        setLocation(geocode);
      })
      .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
      });
  }, []);
  useEffect(() => {
    if (location) {
      getAddress(location);
    }
  }, [location]);

  useEffect(() => {
    setTimeout(() => {
      if (address) {
        navigation.navigate('Home', { address });
      }
    }, 2000);
  }, [address, navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/delivery_icon.png')}
        style={styles.image}
        resizeMode="contain"
      />
      {address ? (
        <Text style={styles.addressText}>{address}</Text>
      ) : (
        <ActivityIndicator size="large" />
      )}
    </View>
  );
};

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
  },
});
