import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Contacts from './src/screens/Contacts';
import Profile from './src/screens/Profile';
import Favorites from './src/screens/Favorites';
import User from './src/screens/User';

const TabNavigator = createBottomTabNavigator({
    Contacts: {
        screen: Contacts
    },
    Favorites: {
        screen: Favorites
    },
    User: {
        screen: User
    }
});

export default createAppContainer(TabNavigator);