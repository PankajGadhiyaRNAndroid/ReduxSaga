import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNews } from '../actions';
import { TouchableOpacity, View, Text } from 'react-native';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: 'cyan',
                        borderRadius: 6,
                        borderWidth: 1,
                        borderColor: 'black',
                        padding: 10,
                        marginTop: 10
                    }}
                    onPress={this.props.getNews}>
                    <Text style={{ alignSelf: 'center' }}>Press to see news</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


// let Button = ({ getNews }) => (
//     <TouchableOpacity onPress={this.props.getNews}>
//         <Text>Press to see news</Text>
//     </TouchableOpacity>
// )

const mapDispatchToProps = {
    getNews: getNews,
};

Button = connect(
    null,
    mapDispatchToProps,
)(Button);

export default Button;