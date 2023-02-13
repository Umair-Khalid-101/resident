import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./src/screens/SplashScreen";
import MainPage from "./src/screens/MainPage";
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
import AccountCreated from "./src/screens/AccountCreated";
import WelcomePage from "./src/screens/WelcomePage";
import TabNavigator from "./src/constans/TabNavigator";
import PickupRequestSent from "./src/screens/PickupRequestSent";
import ViewPickupRequest from "./src/screens/ViewPickupRequest";
import GenerateRequest from "./src/screens/GenerateRequest";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AccountCreated"
          component={AccountCreated}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WelcomePage"
          component={WelcomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PickupRequestSent"
          component={PickupRequestSent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ViewPickupRequest"
          component={ViewPickupRequest}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GenerateRequest"
          component={GenerateRequest}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
