import { ifIphoneX } from '../../utils/AppConstants';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        ...ifIphoneX(
            {
                marginTop: 20,
                marginBottom: 20,
            },
            {
                marginTop: 15,
                marginBottom: 15,
            }
        ),
    },

    backupLabel: {
        fontFamily: 'spartan-semibold',
        ...ifIphoneX(
            {
                fontSize: 13,
            },
            {
                fontSize: 13,
            }
        ),
        color: '#58A5FE',
    },

    maincontainer: {
        flex: 1,
    },
    contentcontainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttoncontainer: {
        backgroundColor: 'orange',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'yellow',
        padding: 10,
        marginTop: 10
    },
    roundimage: {
        alignSelf: 'center',
        marginTop: 10,
        width: 100,
        height: 100,
        borderRadius: 100 / 2
    },
    profiletext: {
        alignSelf: 'center',
        margin: 8
    },
    buttontext: {
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold'

    }


});

