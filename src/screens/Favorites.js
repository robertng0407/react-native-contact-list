import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';

import { fetchContacts } from '../utils/api';

import ContactThumbnail from '../components/ContactThumbnail';

const keyExtractor = ({ phone }) => phone;

class Favorites extends Component {
    static navigationOptions = {
        title: 'Favorites'
    };

    renderFavoriteThumbnail = ({ item }) => {
        const { navigation: { navigate } } = this.props;
        const { avatar } = item;

        return (
            <ContactThumbnail
                avatar={avatar}
                onPress={() => navigate('Profile', { contact: item })}
            />
        );
    };

    render() {
        const { loading, contacts, error } = this.props;
        const favorites = contacts.filter(contact => contact.favorite);

        return (
            <View style={styles.container}>
                {loading && <ActivityIndicator size="large" />}
                {error && <Text>Error...</Text>}

                {!loading &&
                    !error && (
                        <FlatList
                            data={favorites}
                            keyExtractor={keyExtractor}
                            numColumns={3}
                            contentContainerStyle={styles.list}
                            renderItem={this.renderFavoriteThumbnail}
                        />
                    )
                }
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        flex: 1
    },
    list: {
        alignItems: 'center'
    }
});

const mapStateToProps = ({contacts}) => ({
    contacts: contacts.contacts,
    loading: contacts.loading,
    error: contacts.error
});

export default connect(mapStateToProps)(Favorites);