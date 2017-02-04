import React from 'react';
import { View } from 'react-native';
import _ from 'lodash';
import ProductRow from '../productRow';
import { containerStyle } from './styles';

export default (props) => (
    <View style={containerStyle}>
      {_.map(props.data, (product, key) => (
        <ProductRow key={key} product={product} onPress={props.onPress(product)} />
      ))}
    </View>
);
