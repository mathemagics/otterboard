import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import ListPresentation from './listPresentation';

export default class Purveyors extends Component {
   constructor(props) {
      super(props);
      const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
      this.state = {
         dataSource: ds.cloneWithRows([
            'Yen Brothers', 'Jim Koo', 'Shaw Farms', 'Beacoup Bakery', 'GFS'
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
