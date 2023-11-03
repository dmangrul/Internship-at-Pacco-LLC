import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CustomerLogin from "./src/screens/CustomerLogin";
import DriverLogin from "./src/screens/DriverLogin";
import CustomerRegistration from "./src/screens/CustomerRegistration";
import DriverRegistration from "./src/screens/DriverRegistration";
import AccountScreen from "./src/screens/CustomerAccount";
import Welcome from "./src/screens/Welcome";
import DriverAccount from "./src/screens/DriverAccount";
import CustomerAccount from "./src/screens/CustomerAccount";
import CustomerVerifyRegistration from "./src/screens/CustomerVerifyRegistration";
import DriverVerifyRegistration from "./src/screens/DriverVerifyRegistration";

const navigator = createStackNavigator(
  {
    DriverLogin: DriverLogin,
    CustomerLogin: CustomerLogin,
    CustomerRegistration: CustomerRegistration,
    DriverRegistration: DriverRegistration,
    AccountScreen: AccountScreen,
    Welcome: Welcome,
    DriverAccount: DriverAccount,
    CustomerAccount: CustomerAccount,
    CustomerVerifyRegistration: CustomerVerifyRegistration,
    DriverVerifyRegistration: DriverVerifyRegistration,
  },
  {
    initialRouteName: "Welcome",
    defaultNavigationOptions: {
      //headerShown: false,
    },
  }
);

export default createAppContainer(navigator);
