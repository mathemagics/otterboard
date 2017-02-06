import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import ListPresentation from '../../components/listPresentation';
import OrderRow from '../../components/orderRow';
import { productOrders } from '../../data';

export default class Orders extends Component {
   constructor(props) {
      super(props);
      const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
      this.state = {
         dataSource: ds.cloneWithRows(productOrders.map((order) => (
           <OrderRow order={order} />
         )))
      };
   }
   render() {
      return (
         <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', paddingTop: 75 }}>
            <ListPresentation dataSource={this.state.dataSource} />
         </View>
      );
   }
}
