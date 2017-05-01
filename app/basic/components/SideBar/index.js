import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    Dimensions,
    Alert,
    StyleSheet,
    Animated
} from 'react-native';

import styles from './style.android';


var { width, height } = Dimensions.get('window');
var _containerLeft = -width;
var _sidebarLeft = -(width * .8);

export default class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onClickOn = false;
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);

        this.onMaskClickOn = false;
        this.onMaskTouchStart = this.onMaskTouchStart.bind(this);
        this.onMaskTouchMove = this.onMaskTouchMove.bind(this);
        this.onMaskTouchEnd = this.onMaskTouchEnd.bind(this);

        this.startX = 0;
        this.moveX = 0;
    }

    onTouchStart(e) {
        this.onClickOn = true;
    }

    onTouchMove(e) {
        this.onClickOn = false;

    }

    onTouchEnd(e) {
        if (this.onClickOn) {

        }
    }

    onMaskTouchStart(e) {
        this.onMaskClickOn = true;

        var { locationX, locationY, pageX, pageY, timestamp } = e.nativeEvent;
        this.startX = locationX;
        console.log(locationX);
    }
    onMaskTouchMove(e) {
        this.onMaskClickOn = false;

        var { locationX, locationY, pageX, pageY, timestamp } = e.nativeEvent;
        console.log(locationX);
        this.moveX = locationX - this.startX;
        var moveLeft = this.props.sideBarStyle.sideBarLeft + this.moveX;
        this.props.changeStyleLeft(moveLeft);
    }
    
    onMaskTouchEnd(e) {
        if (this.onMaskClickOn) {
            this.props.resetStyleLeft(_sidebarLeft);
        }
    }

    componentDidMount() {

    }

    render() {
        var { containerLeft, sideBarLeft } = this.props.sideBarStyle;
        // console.log(containerLeft, sideBarLeft);
        var containerLeftStyle = typeof(parseInt(containerLeft)) === 'number' ? { left: containerLeft } : { left: _containerLeft },
            sidebarLeftStyle = typeof(parseInt(sideBarLeft)) === 'number' ? { left: sideBarLeft } : { left: _sidebarLeft };

        // console.log(containerLeftStyle, sidebarLeftStyle);

        return (
            <View style={[styles.container,containerLeftStyle]}
                    /*onStartShouldSetResponder={(e) => true}
                    onMoveShouldSetResponder={(e) => true}
                    onResponderStart={this.onTouchStart}
                    onResponderMove={this.onTouchMove}
                    onResponderRelease={this.onTouchEnd}*/>

                <View style={[styles.sidebar,sidebarLeftStyle]}>

                </View>
                <View style={styles.mask}
                        onStartShouldSetResponder={(e) => true}
                        onMoveShouldSetResponder={(e) => true}
                        onResponderStart={this.onMaskTouchStart}
                        onResponderMove={this.onMaskTouchMove}
                        onResponderRelease={this.onMaskTouchEnd}>
                    
                </View>
            </View>
        );
    }
}

SideBar.containerLeft = _containerLeft;
SideBar.sideBarLeft = _sidebarLeft;
