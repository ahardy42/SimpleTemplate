import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import { colors, layout, typography } from '../../utility/theme'
import { useNavigation } from '@react-navigation/native'

export default function State() {
    const navigation = useNavigation()
    const selectAuth = state => state.auth
    const state = useSelector(selectAuth)

    const navigateBack = () => {
        navigation.goBack()
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigateBack} style={styles.button}>
                    <Text>Back</Text>
                </TouchableOpacity>
                <Text style={styles.title}>User Screen</Text>
                <View style={styles.spacer} />
            </View>
            <ScrollView>
                <View style={styles.state}>
                    <Text style={styles.text}>{JSON.stringify(state, null, 2)}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        ...layout.container,
        flex: 1,
        padding: 16,
        backgroundColor: colors.light,
    },
    text: {
        ...typography.tiny,
        color: colors.white,
    },
    title: {
        ...typography.h1,
        textAlign: 'center',
    },
    state: {
        marginHorizontal: 8,
        padding: 8,
        backgroundColor: colors.dark,
        borderRadius: 4,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 16,
    },
    button: {
        paddingVertical: 8,
        backgroundColor: 'lightgray',
        borderRadius: 8,
        alignItems: 'center',
        width: 64,
    },
    spacer: {
        width: 64,
    },
})
