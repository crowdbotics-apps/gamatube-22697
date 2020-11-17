import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Additem174856Navigator from '../features/Additem174856/navigator';
import Maps174852Navigator from '../features/Maps174852/navigator';
import UserProfile174848Navigator from '../features/UserProfile174848/navigator';
import BlankScreen0174825Navigator from '../features/BlankScreen0174825/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Additem174856: { screen: Additem174856Navigator },
Maps174852: { screen: Maps174852Navigator },
UserProfile174848: { screen: UserProfile174848Navigator },
BlankScreen0174825: { screen: BlankScreen0174825Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
