import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { Component } from 'react';


export class MenuButton extends Component {
    static defaultProps = {
        onPress: (e) => {},
        iconStyle: {}
    }

    render() {
        var { onPress, iconStyle } = this.props;
        return (
            <Icon.Button name="menu" backgroundColor="transparent" 
            		onPress={onPress} iconStyle={iconStyle}>                
            </Icon.Button>
        );
    }
}

export class MoreButton extends Component {
    static defaultProps = {
        onPress: (e) => {},
        iconStyle: {}
    }
    
    render() {
        var { onPress, iconStyle } = this.props;
        return (
            <Icon.Button name="more-vert" backgroundColor="transparent" 
                    onPress={onPress} iconStyle={iconStyle}>
            </Icon.Button>
        );
    }
}
