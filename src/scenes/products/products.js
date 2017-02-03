import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import SearchBar from 'react-native-searchbar';
import Button from 'apsl-react-native-button';

import ProductList from '../../components/productList';
import GridList from '../../components/gridList';
import OrderModal from '../../components/orderModal';
import { toggleFilter, selectProduct, closeProduct } from '../../actions';

import { categories, productData } from '../../data';

class Products extends Component {
  openModal(product) {
    console.log(product);
    return () => { this.props.selectProduct(product); };
  }
  render() {
    const { selected, filter, } = this.props;
    return (
      <View style={{ flex: 1, top: -20 }}>
        {selected && <OrderModal product={selected} closeModal={this.props.closeProduct} />}
        <SearchBar showOnLoad hideBack heightAdjust={-10} />
        <View style={{ flex: 1, flexDirection: 'column', marginTop: 80 }}>
          <Button onPress={this.props.toggleFilter}> Filter </Button>
          {filter && <GridList categories={categories} />}
          <ProductList data={productData} onPress={this.openModal.bind(this)} />
        </View>
      </View>
    );
  }
}
const mapStateToProps = ({ products }) => {
  const { filter, selected } = products;
  console.log(products);
  return { filter, selected };
};

export default connect(mapStateToProps, { toggleFilter, selectProduct, closeProduct })(Products);
