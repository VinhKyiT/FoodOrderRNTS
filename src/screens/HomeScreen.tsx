import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const HomeScreen = () => {
  const { params } = useRoute();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchBox} placeholder="Search something..." />
        <TouchableOpacity style={styles.searchIcon}>
          <Feather name="search" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.locationArea}>
        <Ionicons name="location-outline" size={24} color="black" />
        <Text style={{ color: '#000' }}>{params?.address}</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
    marginHorizontal: 10,
    position: 'relative',
    alignItems: 'center',
  },
  searchBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: '82%',
  },
  searchIcon: {
    position: 'absolute',
    right: 10,
    padding: 10,
    margin: 10,
    backgroundColor: 'transparent',
  },
  locationArea: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 13,
  },
});
