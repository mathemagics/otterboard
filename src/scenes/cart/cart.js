import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductFinder from '../../components/productFinder';
import { getCart } from '../../actions';

class Cart extends Component {
  componentDidMount() {
    this.props.getCart();
  }
    render() {
      return (
        <ProductFinder data={this.props.data} />
      );
    }
}

const mapStateToProps = ({ products }) => {
  const { data } = products;
  return { data };
};

export default connect(mapStateToProps, { getCart })(Cart);
