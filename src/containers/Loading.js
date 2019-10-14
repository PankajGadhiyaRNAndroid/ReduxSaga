import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

let Loading = ({ loading }) => (
    loading ?
        <View >
            <Spinner
                visible={loading}
                overlayColor='rgba(0, 0, 0, 0.5)'
                textStyle={{ color: '#000' }}
                color='green'
                animation='fade'
                size='large'
            />
        </View>
        : null
);

const mapStateToProps = (state) => ({ loading: state.user.loading })

Loading = connect(mapStateToProps, null)(Loading)

export default Loading;