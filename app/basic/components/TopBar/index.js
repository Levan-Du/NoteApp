import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Alert
} from 'react-native';

import { MenuButton, MoreButton } from '../Button';

export default class TopBar extends Component {
    static defaultProps = {
        title: 'title',
        containerStyle: {
            height: 40,
            padding: 5,
            backgroundColor: '#2b6',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        textStyle: { color: '#fff' },
        menuClick: (e) => {},
        moreClick: (e) => {},
        leftIconStyle: { marginRight: 0 },
        rightIconStyle: { marginRight: 0 }
    }

    constructor(props) {
        super(props);
    }

    render() {
        var { containerStyle, title, textStyle, menuClick, moreClick, leftIconStyle, rightIconStyle } = this.props;
        return (
            <View style={containerStyle}>
                <MenuButton iconStyle={leftIconStyle} onPress={menuClick} />
                <Text style={textStyle}>{title}</Text>
                <MoreButton iconStyle={rightIconStyle} onPress={moreClick} />
            </View>
        );
    }
}
