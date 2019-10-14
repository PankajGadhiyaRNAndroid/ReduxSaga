import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';

let NewsItem = ({ article }) => (

    article ?
        <View style={{ backgroundColor: 'yellow', flex: 1 }} >
            <View>
                <Image
                    style={{ alignSelf: 'center', marginTop: 10, width: 100, height: 100, borderRadius: 100 / 2 }}
                    source={{ uri: article.picture.large }}
                />
                <Text style={{ alignSelf: 'center', margin: 8 }}>FullName: {article.name.title + '. ' + article.name.first + ' ' + article.name.last}</Text>
                <Text style={{ alignSelf: 'center', margin: 8 }}>Email: {article.email}</Text>
                <Text style={{ alignSelf: 'center', margin: 8 }}>Gender: {article.gender}</Text>
                <Text style={{ alignSelf: 'center', margin: 8 }}>Phone: {article.phone}</Text>
                <Text style={{ alignSelf: 'center', margin: 8 }}>Cell: {article.cell}</Text>
                <Text style={{ alignSelf: 'center', margin: 8 }}>City: {article.location.city}</Text>
                <Text style={{ alignSelf: 'center', margin: 8 }}>State: {article.location.state}</Text>
                <Text style={{ alignSelf: 'center', margin: 8 }}>Country: {article.location.country}</Text>

            </View>
        </View>
        : null
);

const mapStateToProps = (state) => ({
    article: state.user.news,
})

NewsItem = connect(mapStateToProps, null)(NewsItem)

export default NewsItem;