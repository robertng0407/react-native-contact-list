import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';

import ContactListItem from '../components/ContactListItem';
import * as actions from '../store/actions';

const keyExtractor = ({ phone }) => phone;

class Contacts extends Component {
    static navigationOptions = {
        title: 'Contacts'
    };

    componentDidMount() {
        const {fetchContactsStart} = this.props;
        fetchContactsStart();
    };

    navigateToProfile = contact => {
        const { navigation: { navigate } } = this.props;
        navigate('Profile', { contact });
    }

    renderContact = ({ item }) => {
        const { name, avatar, phone } = item;

        return (
            <ContactListItem
                name={name}
                avatar={avatar}
                phone={phone}
                onPress={() => this.navigateToProfile(item)}
            />
        );
    };

    render() {
        const { loading, contacts, error } = this.props;

        const contactsSorted = contacts.sort((a, b) => (
            a.name.localeCompare(b.name)
        ));

        return (
            <View style={styles.container}>
                {loading && <ActivityIndicator size="large" />}
                {error && <Text>Error...</Text>}
                {!loading &&
                    !error && (
                        <FlatList
                            data={contactsSorted}
                            keyExtractor={keyExtractor}
                            renderItem={this.renderContact}
                        />
                    )}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        flex: 1
    }
});

const mapStateToProps = ({contacts}) => ({
    contacts: contacts.contacts,
    loading: contacts.loading,
    error: contacts.error
});

const mapDispatchToProps = dispatch => ({
    fetchContactsStart: () => dispatch(actions.fetchContactsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);