import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import ContactThumbnail from '../components/ContactThumbnail';
import DetailListItem from '../components/DetailListItem';

import { fetchRandomContact } from '../utils/api';

import colors from '../utils/colors';

export default class Profile extends Component {
    state = {
        contact: {}
    }

    async componentDidMount() {
        const contact = await fetchRandomContact();

        this.setState({ contact });
    }

    render() {
        const { avatar, name, email, cell, phone } = this.state.contact;

        return (
            <View style={styles.container}>
                <View style={styles.avatarSection}>
                    <ContactThumbnail
                        avatar={avatar}
                        name={name}
                        phone={phone}
                    />
                </View>
                <View style={styles.detailsSection}>
                    <DetailListItem
                        icon="mail"
                        subtitle="Email"
                        subtitle={email}
                    />
                    <DetailListItem
                        icon="phone"
                        subtitle="Work"
                        subtitle={phone}
                    />
                    <DetailListItem
                        icon="smartphone"
                        subtitle="Personal"
                        subtitle={cell}
                    />
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    avatarSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.blue
    },
    detailsSection: {
        flex: 1,
        backgroundColor: 'white'
    }
});