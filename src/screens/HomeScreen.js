import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import ImageGrid from '../components/ImageGrid';

class Home extends Component {
  render() {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageGrid />

      </View>
    );
  }
}

export default Home;