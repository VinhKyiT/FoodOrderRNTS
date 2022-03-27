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
import React from 'react';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchBox} placeholder="Search something..." />
        <TouchableOpacity style={styles.searchIcon}>
          <Feather name="search" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View></View>
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
  },
  searchBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: '80%',
  },
  searchIcon: {
    position: 'absolute',
    right: 50,
    width: 15,
    height: 15,
  },
});
