import React from 'react';
import { View } from 'react-native';
import SearchBar from 'react-native-searchbar';
import ProductList from './productList';
import GridList from './gridList';

const CATEGORIES = {
  meat: '#a23',
  seafood: '#1cc',
  dairy: '#ddd',
  produce: '#2a2',
  other: '#222',
  nuts: '#c71',
};

export default () => (
  <View style={{ flex: 1, flexDirection: 'column', top: -20 }}>
    <GridList categories={CATEGORIES} />
    <SearchBar showOnLoad hideBack heightAdjust={-10} />
    <ProductList />
  </View>
);
