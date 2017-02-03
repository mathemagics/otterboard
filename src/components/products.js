import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import SearchBar from 'react-native-searchbar';

import ProductList from './productList';
import GridList from './gridList';
import toggleFilter from '../actions';

const CATEGORIES = {
  meat: '#a23',
  seafood: '#1cc',
  dairy: '#ddd',
  produce: '#2a2',
  other: '#222',
  nuts: '#c71',
};

const Products = (props) => (
  <View style={{ flex: 1, flexDirection: 'column' }}>
    {props.filter && <GridList categories={CATEGORIES} />}
    <SearchBar showOnLoad hideBack heightAdjust={-10} />
    <ProductList />
  </View>
);
const mapStateToProps = ({ products }) => {
  const { filter } = products;
  return { filter };
};

export default connect(mapStateToProps, { toggleFilter })(Products);
