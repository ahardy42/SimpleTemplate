import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import individual screens
import HomeScreen from '../../screens/Home'
import UserScreen from '../../screens/User'

const Stack = createNativeStackNavigator()

export default function AuthedStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='User' component={UserScreen} />
        </Stack.Navigator>
    )
}