import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import ContactThumbnail from '../components/ContactThumbnail';
import DetailListItem from '../components/DetailListItem';

import colors from '../utils/colors';

export default class Profile extends Component {
    static navigationOptions = ({ navigation: { state: { params } } }) => {
        const { contact: { name } } = params;
        return {
            title: name.split(' ')[0],
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: colors.blue
            }
        };
    };

    render() {
        const { navigation: { state: { params } } } = this.props;
        const { contact } = params;
        const { avatar, name, email, cell, phone } = contact;

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