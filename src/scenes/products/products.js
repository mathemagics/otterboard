import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductFinder from '../../components/productFinder';
import { getProducts } from '../../actions';

class Products extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
    render() {
      return (
        <ProductFinder data={this.props.data} />
      );
    }
}

const mapStateToProps = ({ products }) => {
  const { data } = products;
  console.log('data', data);
  return { data };
};

export default connect(mapStateToProps, { getProducts })(Products);
