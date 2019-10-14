import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { getNews } from '../../actions/welcomeaction';
import styles from './WelcomeStyle';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article: this.props.article,
        };


    }

    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        // this.props.getNews();
    }

    static getDerivedStateFromProps(nextProps, prevState) {

        if (nextProps.article !== prevState.article) {
            return { article: nextProps.article };
        }
        else return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.article !== this.state.article) {
            this.setState({
                article: this.state.article
            });
            // this.classMethod();
        }
    }



    gotoLogin = () => {
        this.props.navigation.navigate('ScreenLogin');

        // This is for no back option

        // this.props.navigation.dispatch({
        //     type: 'Navigation/RESET',
        //     index: 0,
        //     actions: [{ type: 'Navigate', routeName: 'ScreenLogin' }]
        // });
    }



    gotoRegister = () => {
        this.props.navigation.navigate('ScreenRegister');
        // This is for no back option

        // this.props.navigation.dispatch({
        //     type: 'Navigation/RESET',
        //     index: 0,
        //     actions: [{ type: 'Navigate', routeName: 'ScreenRegister' }]
        // });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.childcontainer}>

                    <TouchableOpacity
                        style={styles.buttoncontainer}
                        activeOpacity={0.9}
                        onPress={this.gotoLogin}>
                        <Text style={styles.textcontainer}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttoncontainer}
                        activeOpacity={0.9}
                        onPress={this.gotoRegister}>
                        <Text style={styles.textcontainer}>Register</Text>
                    </TouchableOpacity>



                </View>

            </View>
        );
    }
}


const mapDispatchToProps = {
    getNews: getNews,
};

const mapStateToProps = (state) => ({
    loading: state.user.loading,
    article: state.user.news,
})

Welcome = connect(mapStateToProps, mapDispatchToProps)(Welcome)

export default Welcome;
