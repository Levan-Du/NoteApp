import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    Dimensions,
    Alert,
    StyleSheet
} from 'react-native';

import styles from './style.android';


var { width, height } = Dimensions.get('window');
var _containerLeft = -width;
var _sidebarLeft = -(width * .8);

export default class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            containerStyle0: [styles.container],
            sidebarStyle0: [styles.sidebar],
            maskStyle: styles.mask,
            startX: 0,
            moveX: 0
        };
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
    }

    onTouchStart(e) {
        var { locationX, locationY, pageX, pageY, timestamp } = e.nativeEvent;
        if (locationX > width * 0.8) {
            this.props.resetStyleLeft();
        }
        this.setState((prevState, props) => ({
            startX: locationX
        }));
    }

    onTouchMove(e) {
        var { locationX, locationY, pageX, pageY, timestamp } = e.nativeEvent;
        this.setState((prevState, props) => {
            var mx = locationX - prevState.startX;
            console.log(mx);
            if (locationX < width * 0.8) {
                this.props.changeStyleLeft(mx);
            }
            return {
                startX: locationX,
                moveX: mx
            };
        });
    }

    onTouchEnd(e) {
        var { locationX, locationY, pageX, pageY, timestamp } = e.nativeEvent;
        this.setState((prevState, props) => {
            var mx = locationX - prevState.startX;
            return {
                startX: 0,
                moveX: mx
            };
        });
    }

    render() {
        var { containerStyle0, sidebarStyle0, maskStyle } = this.state;
        var { containerLeft, sideBarLeft } = this.props.sideBarStyle;
        console.log(containerLeft, sideBarLeft);
        var containerLeftStyle = containerLeft ? { left: containerLeft } : { left: _containerLeft },
            sidebarLeftStyle = sideBarLeft ? { left: sideBarLeft } : { left: _sidebarLeft };

        return (
            <View style={[containerStyle0,containerLeftStyle]}
            		onStartShouldSetResponder={(e) => true}
            		onMoveShouldSetResponder={(e) => true}
            		onResponderMove={this.onTouchMove}
            		onResponderStart={this.onTouchStart}
            		onResponderRelease={this.onTouchEnd}>

				<View style={[sidebarStyle0,sidebarLeftStyle]}>

				</View>
				<View style={maskStyle}>
					
				</View>
			</View>
        );
    }
}

SideBar.containerLeft = _containerLeft;
SideBar.sideBarLeft = _sidebarLeft;
