import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import ListPresentation from '../../components/listPresentation';

export default class Orders extends Component {
   constructor(props) {
      super(props);
      const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
      this.state = {
         dataSource: ds.cloneWithRows([
            'Feb 1 2017', 'Jan 30 2017', 'Jan 29 2017', 'Jan 28 2017'
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
