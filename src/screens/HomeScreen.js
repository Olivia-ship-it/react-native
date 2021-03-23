import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import ImageGrid from '../components/ImageGrid';
import Filter from '../components/Filter';

class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Filter />
        <ImageGrid />
      </View>
    );
  }
}

export default Home;