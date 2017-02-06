import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, TextInput } from 'react-native';

import { containerStyle, inputStyle } from './styles';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }
  onChange(text) {
      this.setState({ term: text });
    }
  render() {
    const { value, onChange } = this.props;
    return (
      <View style={containerStyle}>
        <Icon name='search' size={20} />
        <TextInput
          style={inputStyle}
          onChange={onChange ? onChange : this.onChange}
          value={value ? value : this.state.term}
        />
        {this.state.term && <Icon name='times' size={20} />}
      </View>
    );
  }
}

export default SearchBar;
