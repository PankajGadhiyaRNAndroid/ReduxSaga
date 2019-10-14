import React, { PureComponent } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import styles from './LoginStyle';
import { getNews } from '../../actions/profile';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';

class Login extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: this.props.loading,
            article: this.props.article,
        };
    }

    static navigationOptions = {
        header: null
    };

    static getDerivedStateFromProps(nextProps, prevState) {

        console.log('newProps :::-> ', JSON.stringify(nextProps));


        if (nextProps.article !== prevState.article) {
            return { article: nextProps.article };
        }
        if (nextProps.ploading !== prevState.ploading) {
            return { isLoading: nextProps.ploading };
        }
        else return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.article !== this.state.article) {
            this.setState({
                article: this.state.article
            });
        }

        if (prevProps.ploading !== this.state.isLoading) {
            this.setState({
                isLoading: this.state.isLoading
            });
        }
    }

    getProfileData = () => {
        this.props.getNews();
    }

    render() {
        return (
            <SafeAreaView style={styles.maincontainer}>
                {
                    this.state.isLoading &&
                    <View style={{
                        height: '100%',
                        width: '100%',
                        zIndex: 2,
                        position: 'absolute',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    }}>
                        {/* <Bubbles size={10} color="#000" /> */}
                        <Bars size={10} color="orange" />
                        {/* <Pulse size={100} color="#000000" /> */}
                        {/* <DoubleBounce size={50} color="#1CAFF6" /> */}
                    </View>
                    // <Spinner
                    //     visible={this.state.isLoading}
                    //     overlayColor='rgba(0, 0, 0, 0.0)'
                    //     textStyle={{ color: '#000' }}
                    //     color='blue'
                    //     size='large'
                    // />
                }
                <View style={styles.maincontainer}>

                    <View style={styles.contentcontainer}>
                        <TouchableOpacity
                            style={styles.buttoncontainer}
                            onPress={this.getProfileData}
                            activeOpacity={0.8}>
                            <Text style={styles.buttontext}>Get Random</Text>
                        </TouchableOpacity>
                    </View>

                    {
                        this.state.article &&
                        <View style={{
                            borderWidth: 1,
                            borderColor: 'orange',
                            marginTop: 10,
                            borderRadius: 6,
                            margin: 20
                        }}>
                            <Image
                                style={styles.roundimage}
                                source={{ uri: this.state.article.picture.large }}
                            />
                            <Text style={styles.profiletext}>FullName: {this.state.article.name.title + '. ' + this.state.article.name.first + ' ' + this.state.article.name.last}</Text>
                            <Text style={styles.profiletext}>Email: {this.state.article.email}</Text>
                            <Text style={styles.profiletext}>Gender: {this.state.article.gender}</Text>
                            <Text style={styles.profiletext}>Phone: {this.state.article.phone}</Text>
                            <Text style={styles.profiletext}>Cell: {this.state.article.cell}</Text>
                            <Text style={styles.profiletext}>City: {this.state.article.location.city}</Text>
                            <Text style={styles.profiletext}>State: {this.state.article.location.state}</Text>
                            <Text style={styles.profiletext}>Country: {this.state.article.location.country}</Text>
                        </View>
                    }

                </View>
            </SafeAreaView>
        );
    }
}



const mapDispatchToProps = {
    getNews: getNews,
};

const mapStateToProps = (state) => ({
    ploading: state.user.loading,
    article: state.user.news,
})

Login = connect(mapStateToProps, mapDispatchToProps)(Login)



export default Login;
