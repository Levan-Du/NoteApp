import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native';

export default class TopBar extends Component {
    static defaultProps = {
        containerStyle: {
            height: 40,
            padding: 5,
            backgroundColor: '#2b6',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }
    }

    constructor(props) {
        super(props);
    }

    render() {
        var { containerStyle } = this.props;
        return (
            <View style={containerStyle}>
            	<TouchableOpacity>
            		<Text>侧边栏</Text>
            	</TouchableOpacity>  	
            	<TouchableOpacity>
            		<Text>下拉菜单</Text>
            	</TouchableOpacity>
            </View>
        );
    }
}
