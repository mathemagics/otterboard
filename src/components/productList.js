import React from 'react';
import { View } from 'react-native';
import ProductRow from './productRow';

export default () => (
    <View style={{ flex: 2, flexDirection: 'column', alignItems: 'flex-start', }}>
      <ProductRow />
      <ProductRow />
      <ProductRow />
    </View>
);
