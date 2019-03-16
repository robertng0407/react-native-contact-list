import { createStackNavigator, createAppContainer } from 'react-navigation';

import Contacts from './src/screens/Contacts';
import Profile from './src/screens/Profile';

const AppNavigator =  createStackNavigator({
    Contacts: {
        screen: Contacts
    },
    Profile: {
        screen: Profile
    }
});

export default createAppContainer(AppNavigator);