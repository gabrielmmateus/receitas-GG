import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Copyright = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>&copy; {new Date().getFullYear()} Receitas G&G</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5EADD',
    alignItems: 'center',
    paddingVertical: 10,
  },
  text: {
    fontSize: 12,
    color: '#333333',
    fontWeight: 'bold',
  },
});

export default Copyright;
