import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Button from 'apsl-react-native-button';

import ProductList from '../../components/productList';
import FilterList from '../../components/filterList';
import OrderModal from '../../components/orderModal';
import SearchBar from '../../components/common/searchbar';
import { toggleFilter, selectProduct, closeProduct, changeFilter, modifyCart } from '../../actions';

import { buttonStyle, buttonTextStyle } from './styles';
import { productCategories, productPurveyors } from '../../data';

class ProductFinder extends Component {
  constructor(props) {
    super(props);

    this.state= {
      searchTerm: '',
      currentProducts: this.props.data,
    }
    this.openModal = this.openModal.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.selectFilter = this.selectFilter.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.changeCart = this.changeCart.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    const { currentCategories } = nextProps;
    const currentProducts =  currentCategories.length !== 0 ?
      nextProps.data.filter((product)=> {
        return currentCategories.includes(product.category);
      }) :
      nextProps.data;
    this.setState({
      currentProducts,
    });
  }
  changeCart(product ) {
    return ( quantity, previous, ) => {
      return this.props.modifyCart(product, quantity, previous )
    }
  }
  handleSearch(text) {
    const term = text.toLowerCase();
    const { data } = this.props;
    const filteredProducts = data.filter(product => {
      const name =  product.name.toLowerCase();
      return name.includes(term);
    });
    this.setState({
      searchTerm: text,
      currentProducts: filteredProducts
    });
  }
  handleFilter(type) {
    return (val) => {
      this.props.changeFilter(type, val)
    }
  }
  openModal(product) {
    return () => { this.props.selectProduct(product); };
  }
  selectFilter(type) {
    return () => { this.props.toggleFilter(type); };
  }
  render() {
    const { selected, categoriesOpen, purveyorsOpen } = this.props;
    return (
      <View style={{ flex: 1 }}>
        {selected && <OrderModal product={selected} closeModal={this.props.closeProduct} />}
        <SearchBar
          onChange={text => { this.handleSearch(text); }}
        />
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
          {categoriesOpen &&
            <FilterList data={productCategories} onChange={this.handleFilter('currentCategories')} />
          }
          {purveyorsOpen &&
            <FilterList data={productPurveyors.map(x => x.name)} onChange={this.handleFilter('currentPurveyors')} />
          }
          <ProductList
            data={this.state.currentProducts}
            onPress={this.openModal}
            onModify={this.changeCart}
          />
        </View>
      </View>
    );
  }
}
const mapStateToProps = ({ products }) => {
  const { categoriesOpen, purveyorsOpen,
    selected, currentCategories,
    currentPurveyors } = products;
  return { categoriesOpen, purveyorsOpen,
    selected, currentCategories,
    currentPurveyors };
};

export default connect(mapStateToProps, {
  toggleFilter, selectProduct, closeProduct, changeFilter, modifyCart,
})(ProductFinder);
