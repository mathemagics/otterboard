import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../products';
import { getCart } from '../../actions';

class Cart extends Component {
  componentDidMount() {
    this.props.getCart();
  }
    render() {
      return (
        <Products data={this.props.data} />
      );
    }
}

const mapStateToProps = ({ products }) => {
  const { data } = products;
  return { data };
};

export default connect(mapStateToProps, { getCart })(Cart);
