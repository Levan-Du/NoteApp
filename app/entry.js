import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Dimensions,
    Alert
} from 'react-native';

import TopBar from './basic/components/TopBar';
import SideBar from './basic/components/SideBar';


const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

var datasource = ds.cloneWithRows(['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh']);


export default class NoteApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sideBarStyle: {
                containerLeft: SideBar.containerLeft,
                sideBarLeft: SideBar.sideBarLeft
            }
        }
        this.TopBar_menuClick = this.TopBar_menuClick.bind(this);
        this.TopBar_moreClick = this.TopBar_moreClick.bind(this);
        this.resetSideBarStyleLeft = this.resetSideBarStyleLeft.bind(this);
        this.changeSideBarStyleLeft = this.changeSideBarStyleLeft.bind(this);
    }

    TopBar_menuClick(e) {
        this.setState({
            sideBarStyle: {
                containerLeft: 0,
                sideBarLeft: 0
            }
        });
    }

    TopBar_moreClick(e) {
        Alert.alert('right');
    }

    resetSideBarStyleLeft() {
        this.setState({
            sideBarStyle: {
                containerLeft: 0,
                sideBarLeft: 0
            }
        });
    }

    changeSideBarStyleLeft(sideLeft) {
        this.setState((prevState, props) => {
            return {
                sideBarStyle: {
                    sideBarLeft: sideLeft
                }
            };
        });
    }

    render() {
        var { sideBarStyle, sideBarContainerStyle } = this.state;
        return (
            <View style={styles.container}>
                <SideBar sideBarStyle={sideBarStyle}
                        resetStyleLeft={this.resetSideBarStyleLeft} 
                        changeStyleLeft={this.changeSideBarStyleLeft}
                        />
                <View style={styles.container}
                        onStartShouldSetResponder={()=>true}
                        onStartShouldSetResponder={onTouchStart}
                        >

                    <TopBar menuClick={this.TopBar_menuClick} moreClick={this.TopBar_moreClick} />
                    <ListView
                        contentContainerStyle={styles.content}
                        dataSource={datasource} 
                        renderRow={rowData=>
                            <View style={styles.item}><Text>{rowData}</Text></View>
                        } /> 
                </View>
            </View>
        );
    }
}

var onTouchStart = () => {
    // Alert.alert('onTouchStart');
};


var { width, height } = Dimensions.get('window');
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
