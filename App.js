import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Contacts from './src/screens/Contacts';

export default function App() {
  return (
    <Contacts />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
