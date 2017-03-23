/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, NavigatorIOS } from 'react-native';
import DiscoverPage from './Discover';

export default class ReactNativeInProject extends Component {
  render() {
    return (
      <NavigatorIOS
      initialRoute={{
        title: '发现',
        component: DiscoverPage
      }}
      style={{flex: 1}} />
    );
  }
}

AppRegistry.registerComponent('ReactNativeInProject', () => ReactNativeInProject);
