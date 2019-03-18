import React from 'react';
import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator
} from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import colors from './src/utils/colors';

import Contacts from './src/screens/Contacts';
import Profile from './src/screens/Profile';
import Favorites from './src/screens/Favorites';
import User from './src/screens/User';

const getTabBarIcon = icon => ({ tintColor }) => (
    <MaterialIcons
        name={icon}
        size={26}
        style={{ color: tintColor }}
    />
);

const ContactsScreens = createStackNavigator({
    Contacts: {
        screen: Contacts
    },
    Profile: {
        screen: Profile
    }
}, {
        initialRouteName: 'Contacts',
        navigationOptions: {
            tabBarIcon: getTabBarIcon('list')
        }
    }
);

const FavoritesScreens = createStackNavigator({
    Favorites: {
        screen: Favorites
    },
    Profile: {
        screen: Profile
    }
}, {
        initialRouteName: 'Favorites',
        navigationOptions: {
            tabBarIcon: getTabBarIcon('star')
        }
    }
);

const UserScreens = createStackNavigator({
    User: {
        screen: User
    },
    Profile: {
        screen: Profile
    }
}, {
        initialRouteName: 'User',
        navigationOptions: {
            tabBarIcon: getTabBarIcon('person')
        }
    }
);

const TabNavigator = createBottomTabNavigator({
    Contacts: {
        screen: ContactsScreens
    },
    Favorites: {
        screen: FavoritesScreens
    },
    User: {
        screen: UserScreens
    }
});

export default createAppContainer(TabNavigator);