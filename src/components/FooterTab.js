import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';

const AppFooter = props => {
  return (
      
      <Footer >
        <FooterTab>
          <Button
              onPress={() => props.navigation.navigate('Main')}>
            <Icon name="apps" />
          </Button>
          <Button
              onPress={() => props.navigation.navigate('Upload')}>

            <Icon name="camera" />
          </Button>
          <Button active
              onPress={() => props.navigation.navigate('Favorites')}>
            <Icon active name="heart" />
          </Button>
          <Button
              onPress={() => props.navigation.navigate('Profile')}>
            <Icon name="person" />
          </Button>
        </FooterTab>
      </Footer>
  );
};

export default AppFooter;