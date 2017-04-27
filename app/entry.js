import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Dimensions
} from 'react-native';

import TopBar from './basic/components/TopBar';


var { height, width } = Dimensions.get('window');

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

var datasource = ds.cloneWithRows(['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh']);

export default class NoteApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TopBar />
                <ListView
                    contentContainerStyle={styles.content}
                    dataSource={datasource} 
                    renderRow={rowData=>
                        <View style={styles.item}><Text>{rowData}</Text></View>
                    }
                /> 
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    top: {
        height: 40,
        backgroundColor: '#2b6'
    },
    content: {
        paddingBottom: 10,
        backgroundColor: '#eee',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        width: (width - 30) / 2,
        height: (width - 30) / 2,
        backgroundColor: '#fff',
        marginLeft: 10,
        marginTop: 10
    }
});
