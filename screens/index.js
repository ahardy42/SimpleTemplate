import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()
// import individual screens
import HomeScreen from './Home'

export default function Screens() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
                <Stack.Screen name='Home' component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
