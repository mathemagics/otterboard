import React from 'react';
import { ListView, View } from 'react-native';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import Button from 'apsl-react-native-button';
import _ from 'lodash';
import ProductRow from '../productRow';
import { containerStyle, rowStyle, buttonStyle, buttonTextStyle } from './styles';

export default (props) => {

  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
     const dataSource = ds.cloneWithRows(_.map(props.data, (product, key) => (
      <SwipeRow
        style={{flex: 1}}
        disableRightSwipe
        rightOpenValue={-95}
      >
        <View style={rowStyle}>
            <Button
              style={buttonStyle}
              textStyle={buttonTextStyle}
              onClick={props.onDelete(product.purchaseid)}
            >
              Delete
            </Button>
        </View>
         <ProductRow
           key={key}
           product={product}
           onPress={props.onPress(product)}
           onModify={props.onModify(product)}
         />
      </SwipeRow>
     )));
  const renderRow = (rowData) => (
    <View style={{ flex: 1 }}>
      {rowData}
    </View>
  );
  return (
    <View style={containerStyle}>
      {props.data && props.data.length > 0 &&
        <SwipeListView
          dataSource={dataSource}
          renderRow={renderRow}
          previewFirstRow
          previewOpenValue={-95}
        />}
    </View>

  );
}
