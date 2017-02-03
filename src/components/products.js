import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import SearchBar from 'react-native-searchbar';
import Button from 'apsl-react-native-button';

import ProductList from './productList';
import GridList from './gridList';
import { toggleFilter } from '../actions';

const CATEGORIES = {
  meat: '#a23',
  seafood: '#1cc',
  dairy: '#ddd',
  produce: '#2a2',
  other: '#222',
  nuts: '#c71',
};

const Products = (props) => (
  <View style={{ flex: 1, top: -20 }}>
    <SearchBar showOnLoad hideBack heightAdjust={-10} />
    <View style={{ flex: 1, flexDirection: 'column', marginTop: 80 }}>
      <Button onPress={props.toggleFilter}> Filter </Button>
      {props.filter && <GridList categories={CATEGORIES} />}
      <ProductList />
    </View>
  </View>
);
const mapStateToProps = ({ products }) => {
  const { filter } = products;
  console.log(filter);
  return { filter };
};

export default connect(mapStateToProps, { toggleFilter })(Products);
