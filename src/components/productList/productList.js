import React from 'react';
import { ListView, View } from 'react-native';
import _ from 'lodash';
import ProductRow from '../productRow';
import { containerStyle } from './styles';

export default (props) => {
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
     const dataSource = ds.cloneWithRows(_.map(props.data, (product, key) => (
       <ProductRow
         key={key}
         product={product}
         onPress={props.onPress(product)}
         onModify={props.onModify(product)}
       />
     )));
  const renderRow = (rowData) => (
    <View style={{ flex: 1 }}>
      {rowData}
    </View>
  );
  return (
    <View style={containerStyle}>
      {props.data && props.data.length > 0 && <ListView dataSource={dataSource} renderRow={renderRow} />}
    </View>

  );
}
