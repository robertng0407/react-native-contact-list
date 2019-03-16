import { createStackNavigator, createAppContainer } from 'react-navigation';

import Contacts from './src/screens/Contacts';
import Profile from './src/screens/Profile';
import colors from './src/utils/colors';

const AppNavigator = createStackNavigator({
    Contacts: {
        screen: Contacts
    },
    Profile: {
        screen: Profile
    }
}, {
    initialRouteName: 'Contacts'
});

export default createAppContainer(AppNavigator);