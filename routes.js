import { createStackNavigator, createAppContainer } from 'react-navigation';

import Contacts from './src/screens/Contacts';
import Profile from './src/screens/Profile';
import Favorites from './src/screens/Favorites';

const AppNavigator = createStackNavigator({
    Contacts: {
        screen: Contacts
    },
    Profile: {
        screen: Profile
    },
    Favorites: {
        screen: Favorites
    }
}, {
    initialRouteName: 'Favorites'
});

export default createAppContainer(AppNavigator);