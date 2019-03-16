import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Contacts from './src/screens/Contacts';
import Profile from './src/screens/Profile';

export default function App() {
  return (
    <Profile />
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
