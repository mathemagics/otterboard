import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';

import { countStyle, totalStyle, adderStyle, valueStyle, buttonStyle } from './styles';

class Adder extends Component {
  constructor(props) {
    super(props);
    this.changeValue = props.changeValue ? props.changeValue : this.changeValue;
    const value = this.props.value ? this.props.value : 0;
    this.state = {
      count: value,
      prev: 0
    };
  }
  changeValue(type) {
    const newCount = type === '-' ? this.state.count -1 : this.state.count + 1;
    this.setState({
      prev: this.state.count,
      count: newCount,
    }, () => {
      if (this.props.onModify) {
        this.props.onModify(this.state.count, this.state.prev);
      }
    });
  }
  render() {
    const { count } = this.state
    const { price } = this.props
    return (
      <View style={adderStyle}>
        <Button style={buttonStyle} onPress={() => this.changeValue('-')}>
          <Icon name="minus" size={22} color="#e91" />
        </Button>
        <View style={valueStyle}>
          <Text style={countStyle}>
            {`$${count} x ${price}`}
          </Text>
          <Text style={totalStyle}>{`$${(count * price).toFixed(2)}`}</Text>
        </View>
        <Button style={buttonStyle} onPress={() => this.changeValue('+')}>
          <Icon name="plus" size={22} color="#e91" />
        </Button>
      </View>
    )
  }

}

export default Adder;
