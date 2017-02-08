import React from 'react';
import { ListView, View, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import ProductRow from '../productRow';
import { containerStyle } from './styles';

export default (props) => {
  console.log('props', props.data);
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
     const dataSource = ds.cloneWithRows(_.map(props.data, (product, key) => (
       <ProductRow key={key} product={product} onPress={props.onPress(product)} />
     )));
     console.log('ds', dataSource);
  const renderRow = (rowData) => (
    <View style={{ flex: 1 }}>
      {rowData}
    </View>
  );
  return (
    <View style={containerStyle}>
      {props.data && <ListView dataSource={dataSource} renderRow={renderRow} />}
    </View>

  );
}
