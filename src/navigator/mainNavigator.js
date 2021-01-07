import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen9190744Navigator from '../features/BlankScreen9190744/navigator';
import BlankScreen8190743Navigator from '../features/BlankScreen8190743/navigator';
import Messaging7190742Navigator from '../features/Messaging7190742/navigator';
import NotificationList8190741Navigator from '../features/NotificationList8190741/navigator';
import Settings9190740Navigator from '../features/Settings9190740/navigator';
import BlankScreen5190738Navigator from '../features/BlankScreen5190738/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen9190744: { screen: BlankScreen9190744Navigator },
BlankScreen8190743: { screen: BlankScreen8190743Navigator },
Messaging7190742: { screen: Messaging7190742Navigator },
NotificationList8190741: { screen: NotificationList8190741Navigator },
Settings9190740: { screen: Settings9190740Navigator },
BlankScreen5190738: { screen: BlankScreen5190738Navigator },

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
