import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging7190742Navigator from '../features/Messaging7190742/navigator';
import NotificationList8190741Navigator from '../features/NotificationList8190741/navigator';
import Settings9190740Navigator from '../features/Settings9190740/navigator';
import BlankScreen6190739Navigator from '../features/BlankScreen6190739/navigator';
import BlankScreen5190738Navigator from '../features/BlankScreen5190738/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Messaging7190742: { screen: Messaging7190742Navigator },
NotificationList8190741: { screen: NotificationList8190741Navigator },
Settings9190740: { screen: Settings9190740Navigator },
BlankScreen6190739: { screen: BlankScreen6190739Navigator },
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
