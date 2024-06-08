import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import { usersApi } from '../../state/slices/users'

export default function HomeScreen() {
    const { data, error, isLoading } = usersApi.endpoints.getUsers.useQuery()

    React.useEffect(() => {
        console.log('HomeScreen data:', data)
    }, [data])
    
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Welcome to the Home Screen!</Text>
            <Text style={styles.subtitle}>Users:</Text>
            <ScrollView>
                <View style={styles.wrapper}>
                    {data?.map(user => (
                        <View key={user.id} style={styles.user}>
                            <Text style={styles.userText}>{user.name}</Text>
                        </View>
                    ))}
                    {isLoading && <ActivityIndicator />}
                    {!!error && <Text>Error: {error.message}</Text>}
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
