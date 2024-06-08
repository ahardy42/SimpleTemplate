import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { linking } from '../navigation/links'

const Stack = createNativeStackNavigator()
// import individual screens
import HomeScreen from './Home'
import UserScreen from './User'

export default function Screens() {
    return (
        <NavigationContainer {...{ linking }}>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='User' component={UserScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
