'use strict';

import ReactNative from 'react-native';
import HelloWorld from './dist/HelloWorld';

var {
    AppRegistry
} = ReactNative;

AppRegistry.registerComponent('ReactNativeTypescript', () => HelloWorld);