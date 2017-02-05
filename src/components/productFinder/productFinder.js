import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import SearchBar from 'react-native-searchbar';
import Button from 'apsl-react-native-button';

import ProductList from '../../components/productList';
import GridList from '../../components/gridList';
import OrderModal from '../../components/orderModal';
import { toggleFilter, selectProduct, closeProduct } from '../../actions';

import { categories } from '../../data';

class ProductFinder extends Component {
  constructor(props) {
    super(props);

    this.state= {
      searchTerm: '',
      currentProducts: this.props.data,
    }
    this.openModal = this.openModal.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      currentProducts:nextProps.data,
    });
  }
  handleSearch(text) {
    const reg = new RegExp(`${text}`,'gi')
    const filteredProducts = _.filter(this.props.data, product => {
      return reg.test(product.name);
    });
    this.setState({
      searchTerm: text,
      currentProducts: filteredProducts,
    });
  }
  openModal(product) {
    return () => { this.props.selectProduct(product); };
  }
  render() {
    const { selected, filter } = this.props;
    return (
      <View style={{ flex: 1, top: -20 }}>
        {selected && <OrderModal product={selected} closeModal={this.props.closeProduct} />}
        <SearchBar
          showOnLoad
          hideBack
          heightAdjust={-10}
          handleChangeText={text => { this.handleSearch(text) }}
        />
        <View style={{ flex: 1, flexDirection: 'column', marginTop: 80 }}>
          <Button onPress={this.props.toggleFilter}> Filter </Button>
          {filter && <GridList categories={categories} />}
          <ProductList data={this.state.currentProducts} onPress={this.openModal} />
        </View>
      </View>
    );
  }
}
const mapStateToProps = ({ products }) => {
  const { filter, selected } = products;
  return { filter, selected };
};

export default connect(mapStateToProps, {
  toggleFilter, selectProduct, closeProduct
})(ProductFinder);
