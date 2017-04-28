import { StyleSheet, Dimensions } from 'react-native';

var { width, height } = Dimensions.get('window');
var sidebarLeft = -(width * .8);

var styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: width,
        height: height,
        left: -width,
        top: 0,
        zIndex: 1000001
    },
    sidebar: {
        position: 'absolute',
        left: sidebarLeft,
        top: 0,
        width: width * .8,
        height: height,
        backgroundColor: '#aea',
        zIndex: 1000001
    },
    mask: {
        flex: 1,
        backgroundColor: '#000',
        opacity: .7,
        zIndex: 1000000,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles;
