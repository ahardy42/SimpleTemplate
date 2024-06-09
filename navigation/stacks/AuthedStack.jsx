import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import individual screens
import HomeScreen from '../../screens/Home'
import UserScreen from '../../screens/User'
import StateScreen from '../../screens/State'

const Stack = createNativeStackNavigator()

export default function AuthedStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='User' component={UserScreen} />
            <Stack.Screen name='State' component={StateScreen} />
        </Stack.Navigator>
    )
}