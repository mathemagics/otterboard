import React from 'react';
import {
   ListView,
   Text,
   TouchableOpacity,
} from 'react-native';

import styles from './styles';

export default (props) => (
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
);
