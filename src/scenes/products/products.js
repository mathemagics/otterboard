import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import ProductFinder from '../../components/productFinder';
import { getProducts } from '../../actions';

class Products extends Component {
  componentWillMount() {
    this.props.getProducts();
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', paddingTop: 75, }}>
        <ProductFinder data={this.props.data} />
      </View>
    );
  }
}

const mapStateToProps = ({ products }) => {
  const { data } = products;
  return { data };
};

export default connect(mapStateToProps, { getProducts })(Products);
