import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { usersApi } from '../../state/api/users'
import { setUsers, selectUsers } from '../../state/slices/users'

export default function HomeScreen() {
    const { data, error, isLoading } = usersApi.endpoints.getUsers.useQuery()
    console.log('HomeScreen data:', data, error, isLoading, usersApi.endpoints)
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const users = useSelector(selectUsers)

    React.useEffect(() => {
        console.log('Home user data:', data, error, isLoading)
        if (data) dispatch(setUsers(data))
    }, [data])

    const navigateToUser = id => {
        navigation.navigate('User', { id })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Welcome to the Home Screen!</Text>
            <Text style={styles.subtitle}>Users:</Text>
            <ScrollView>
                <View style={styles.wrapper}>
                    {users?.map(user => (
                        <TouchableOpacity key={user.id} style={styles.user} onPress={() => navigateToUser(user.id)}>
                            <Text style={styles.userText}>{user.firstName} {user.lastName}</Text>
                        </TouchableOpacity>
                    ))}
                    {isLoading && <ActivityIndicator />}
                    {!!error && <Text>Error: {error.error}</Text>}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 48,
        marginTop: 16,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 16,
        textAlign: 'center',
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    user: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginBottom: 2,
        backgroundColor: 'lightgray',
    },
    userText: {
        fontSize: 16,
    },
})
