import React from 'react';
import {
   View,
   ListView,
   Text,
} from 'react-native';

export default (props) => (
  <View>
     <ListView
        style={styles.listContainer}
        dataSource={props.dataSource}
        renderRow={
           (rowData) => (
              <Text style={styles.listItem}>
                 {rowData}
              </Text>
           )
        }
     />
  </View>
);

const styles = {
   listContainer: {
      paddingTop: 22,
      marginLeft: 20,
   },
   listItem: {
      fontSize: 26,
      fontWeight: 'bold',
   }
};
