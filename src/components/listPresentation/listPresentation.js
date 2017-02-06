import React from 'react';
import {
   ListView,
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
                {rowData}
            </TouchableOpacity>
           )
        }
     />
);
