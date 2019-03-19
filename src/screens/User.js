import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import ContactThumbnail from '../components/ContactThumbnail';

import colors from '../utils/colors';
import * as actions from '../store/actions';
import { connect } from 'react-redux';

class User extends Component {
    static navigationOptions = ({ navigation: { navigate } }) => ({
        title: 'Me',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: colors.blue
        },
        headerRight: (
            <MaterialIcons
                name="settings"
                size={24}
                style={{ color: 'white', marginRight: 10 }}
                onPress={() => navigate('Options')}
            />
        )
    });

    componentDidMount() {
        const { fetchUserStart } = this.props;
        fetchUserStart();
    };

    render() {
        const { loading, user, error } = this.props;
        const { avatar, name, phone } = user;

        return (
            <View style={styles.container}>
                {loading && <ActivityIndicator size="large" />}
                {error && <Text>Error...</Text>}
                {!loading &&
                    !error && (
                        <ContactThumbnail
                            avatar={avatar}
                            name={name}
                            phone={phone}
                        />
                    )
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue
    }
});

const mapStateToProps = ({ user }) => ({
    user: user.user,
    loading: user.loading,
    error: user.error
});

const mapDispatchToProps = dispatch => ({
    fetchUserStart: () => dispatch(actions.fetchUserStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(User);