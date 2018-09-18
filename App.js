import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { UtilityThemeProvider, Box } from 'react-native-design-utility';

import Navigation from './src/screens';

export default class App extends React.Component {
  render() {
    return (
      <UtilityThemeProvider>
        <Navigation />
      </UtilityThemeProvider>
    );
  }
}
