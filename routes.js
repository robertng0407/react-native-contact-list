import { createStackNavigator, createAppContainer } from 'react-navigation';

import Contacts from './src/screens/Contacts';
import Profile from './src/screens/Profile';
import Favorites from './src/screens/Favorites';
import User from './src/screens/User';

const AppNavigator = createStackNavigator({
    Contacts: {
        screen: Contacts
    },
    Profile: {
        screen: Profile
    },
    Favorites: {
        screen: Favorites
    },
    User: {
        screen: User
    }
}, {
    initialRouteName: 'User'
});

export default createAppContainer(AppNavigator);