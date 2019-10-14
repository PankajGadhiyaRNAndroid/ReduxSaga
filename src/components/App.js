import React, { Component } from 'react';
import { View } from 'react-native';
import Button from '../containers/Button';
import NewsItem from '../containers/NewsItem';
import Loading from '../containers/Loading';
import { Provider } from 'react-redux';
import store from '../sagaconfig/configsaga';

//  Navigation
import Navigation from './Navigation';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Navigation />
                {/* <View>
                    <Button />
                    <Loading />
                    <NewsItem />
                </View> */}
            </Provider>
        );
    }
}

export default App;