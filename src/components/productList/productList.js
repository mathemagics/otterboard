import React from 'react';
import { View } from 'react-native';
import ProductRow from '../productRow';

import { containerStyle } from './styles';

export default () => (
    <View style={containerStyle}>
      <ProductRow />
      <ProductRow />
      <ProductRow />
    </View>
);
