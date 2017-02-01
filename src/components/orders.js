import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import ListPresentation from './listPresentation';

export default class Orders extends Component {
   constructor(props) {
      super(props);
      const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
      this.state = {
         dataSource: ds.cloneWithRows([
            'Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7', 'Item8',
               'Item9', 'Item10'
         ])
      };
   }
   render() {
      return (
         <View>
            <ListPresentation dataSource={this.state.dataSource} />
         </View>
      );
   }
}
