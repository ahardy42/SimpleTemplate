import React from 'react'
import { Provider } from 'react-redux'
import Screens from './screens'

import store from './state/store'

export default function App() {

    return (
        <Provider {...{ store }}>
            <Screens />
        </Provider>
    )
}
