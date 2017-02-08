import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import PurveyorRow from '../../components/purveyorRow'
import ListPresentation from '../../components/listPresentation';
import { productPurveyors } from '../../data';

export default class Purveyors extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
       dataSource: ds.cloneWithRows(productPurveyors.map((purveyor) => (
         <PurveyorRow purveyor={purveyor} />
       )))
     }
  }
   render() {
      return (
         <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', paddingTop: 75 }}>
            <ListPresentation dataSource={this.state.dataSource} />
         </View>
      );
   }
}
