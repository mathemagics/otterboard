import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import SearchBar from 'react-native-searchbar';
import Button from 'apsl-react-native-button';

import ProductList from '../../components/productList';
import GridList from '../../components/gridList';
import { toggleFilter, selectProduct } from '../../actions';

import { CATEGORIES } from '../../data';

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
  return { filter };
};

export default connect(mapStateToProps, { toggleFilter, selectProduct })(Products);
