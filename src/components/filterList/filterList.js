import React , { Component } from 'react';
import { View } from 'react-native';
import SelectBox from '../selectBox';

import { containerStyles} from './styles';

class FilterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
    }
  }
  handleSelect(val) {
    const { selected } = this.state;
    let result = [];

    if (this.state.selected.includes(val)) {
      // if value already in array, remove it without mutating Array
      const index = this.state.selected.indexOf(val);
      result = selected
        .slice(0, index)
        .concat(selected.slice(index + 1));
    } else {
      // add to array without mutating
      result = selected.concat([val]);
    }
    this.setState({ selected: result, }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.selected);
      }
    });

  }
  render() {
    return (
      <View style={containerStyles}>
        {this.props.data.map(val => (
          <SelectBox key={val} onSelect={this.handleSelect.bind(this)}>
            {val}
          </SelectBox>
        ))}
      </View>
    );
  }
}

export default FilterList;
