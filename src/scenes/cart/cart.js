import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Button from 'apsl-react-native-button';

import ProductFinder from '../../components/productFinder';
import { getCart, confirmCart, emptyCart } from '../../actions';
import { buttonStyle, buttonTextStyle, containerStyle, controlStyle } from './styles';

class Cart extends Component {
  componentDidMount() {
    this.props.getCart();
  }
    render() {
      return (
        <View style={containerStyle}>
          <View style={{flex: 7}}>
            <ProductFinder data={this.props.data} />
          </View>
          <View style={controlStyle}>
            <Button style={buttonStyle} onPress={this.props.confirmCart}>
              <Text style={buttonTextStyle}>
                Confirm
              </Text>
            </Button>
            <Button style={buttonStyle}>
              <Text style={buttonTextStyle}>
                Clear Order
              </Text>
            </Button>
          </View>
        </View>

      );
    }
}

const mapStateToProps = ({ cart }) => {
  const { data } = cart;
  return { data };
};

export default connect(mapStateToProps, { getCart, confirmCart, emptyCart })(Cart);
