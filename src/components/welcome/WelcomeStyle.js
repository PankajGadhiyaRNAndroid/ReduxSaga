import { ifIphoneX } from '../../utils/AppConstants';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center'
    },

    childcontainer: {
        flexDirection: 'row',
        marginHorizontal:5

    },

    buttoncontainer: {
        flex: 1,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'steelblue',
        backgroundColor: 'powderblue',
        padding: 6,
        margin: 5
    },

    textcontainer: {
        textAlign: 'center',
        color: 'steelblue'
    }

});

