import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AppBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuButton} onPress={() => console.log('Menu pressed')}>
        <Ionicons name="menu" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Receitas G&G</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#F5EADD',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    marginBottom: 25,
  },
  menuButton: {
    position: 'absolute',
    left: 15,
    top: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AppBar;
