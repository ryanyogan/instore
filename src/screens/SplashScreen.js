import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import { Image } from 'react-native';

import { images } from '../constants/images';

class SplashScreen extends Component {
  state = {};

  componentDidMount() {
    this.checkAuth();
  }

  checkAuth = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Auth');
    }, 2000);
  };

  render() {
    return (
      <Box f={1} center>
        <Box mb="sm">
          <Image source={images.logo} />
        </Box>
        <Box mb="sm">
          <Text size="2xl">
            In
            <Text size="2xl" color="green">
              Store
            </Text>
          </Text>
        </Box>
        <Text size="sm">Easy Grocery Shopping</Text>
      </Box>
    );
  }
}

export default SplashScreen;
