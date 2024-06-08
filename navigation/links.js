import { Linking } from 'react-native'

export const linking = {
    prefixes: ['yourapp://'],
    config: {
        screens: {
            Home: 'home',
            Profile: 'profile',
            Settings: 'settings',
        },
    },
}

export const openLink = async url => {
    const supported = await Linking.canOpenURL(url)

    if (supported) {
        await Linking.openURL(url)
    } else {
        console.log(`Cannot open URL: ${url}`)
    }
}
