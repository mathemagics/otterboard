import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { containerStyle, itemStyle, textStyle } from './styles';

class SelectBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    }
  }
  selectItem() {
    this.setState({
      selected: !this.state.selected,
    });
    if(this.props.onSelect) {
      this.props.onSelect(this.props.children);
    }
  }
  render() {
    return (
      <View style={containerStyle}>
      <TouchableHighlight onPress={this.selectItem.bind(this)}>
        <View style={itemStyle}>
          {
            this.state.selected ?
            <Icon name='check' size={17} color='#108445' /> :
            <Icon name='circle-thin' size={17} />
          }
          <Text style={textStyle}>{this.props.children}</Text>
        </View>
      </TouchableHighlight>
    </View>
    )
  }
}

export default SelectBox;
