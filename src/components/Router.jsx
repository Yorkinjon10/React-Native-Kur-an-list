import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Home/Home";
import LoginScreen from "./Login/Login";

const Stack = createNativeStackNavigator();
export const Router = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
               <Stack.Screen name="home" component={HomeScreen} />
               <Stack.Screen name="login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}