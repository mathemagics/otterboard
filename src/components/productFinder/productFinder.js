import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Button from 'apsl-react-native-button';

import ProductList from '../../components/productList';
import FilterList from '../../components/filterList';
import OrderModal from '../../components/orderModal';
import SearchBar from '../../components/common/searchbar';

import {
  toggleFilter, selectProduct, closeProduct, changeFilter, modifyCart, changeSearch
} from '../../actions';
import { getFilteredProducts } from '../../reducers';

import { buttonStyle, buttonTextStyle } from './styles';
import { productCategories, productPurveyors } from '../../data';

class ProductFinder extends Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.selectFilter = this.selectFilter.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.changeCart = this.changeCart.bind(this);
  }
  changeCart(product) {
    return ( quantity, previous, ) => {
      return this.props.modifyCart(product, quantity, previous )
    }
  }
  selectFilter(type) {
    return () => { this.props.toggleFilter(type); };
  }
  handleFilter(type) {
    return (val) => {
      this.props.changeFilter(type, val)
    }
  }
  handleSearch(text) {
    this.props.changeSearch(text);
  }
  openModal(product) {
    return () => { this.props.selectProduct(product); };
  }
  deletePurchase(purchaseid) {
    return () => {
      this.props.deleteProduct(purchaseid);
    }
  }
  render() {
    const { selected, categoriesOpen, purveyorsOpen, products } = this.props;
    console.log('render products', products)
    return (
      <View style={{ flex: 1 }}>
        {selected && <OrderModal product={selected} closeModal={this.props.closeProduct} />}
        <SearchBar onChange={text => this.handleSearch(text)} />
        <View style={{ flex: 1, flexDirection: 'column', marginTop: 10 }}>
          <View style={{ flexDirection: 'row' }} >

            <Button
              style={buttonStyle}
              textStyle={buttonTextStyle}
              onPress={this.selectFilter('categoriesOpen')}
            >
              Categories
            </Button>

            <Button
              style={buttonStyle}
              textStyle={buttonTextStyle}
              onPress={this.selectFilter('purveyorsOpen')}
            >
              Purveyors
            </Button>

          </View>
          {
            categoriesOpen &&
            <FilterList data={productCategories} onChange={this.handleFilter('currentCategories')} />
          }
          {
            purveyorsOpen &&
            <FilterList data={productPurveyors.map(x => x.name)} onChange={this.handleFilter('currentPurveyors')} />
          }
          <ProductList
            data={getFilteredProducts(this.props.data)}
            onPress={this.openModal}
            onModify={this.changeCart}
          />
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.products.data);
  return { ...state.products };
};

export default connect(mapStateToProps, {
  toggleFilter, selectProduct, closeProduct, changeFilter, modifyCart,
  changeSearch,
})(ProductFinder);
