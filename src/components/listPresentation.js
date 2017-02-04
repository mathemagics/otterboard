import React from 'react';
import {
   View,
   ListView,
   Text,
   TouchableOpacity,
} from 'react-native';

export default (props) => (
  <View>
     <ListView
        style={styles.listContainer}
        dataSource={props.dataSource}
        renderRow={
           (rowData) => (
             <TouchableOpacity>
              <Text style={styles.listItem}>
                 {rowData}
              </Text>
            </TouchableOpacity>
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
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 26,
    fontWeight: 'bold',
  }
};
