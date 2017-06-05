import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'
import reducers from './reducers'

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: "AIzaSyCVURiQTfVxChOxZYqTWRRneU3IUwCNX1A",
    authDomain: "manager-8967.firebaseapp.com",
    databaseURL: "https://manager-8967.firebaseio.com",
    projectId: "manager-8967",
    storageBucket: "manager-8967.appspot.com",
    messagingSenderId: "700106432978"
    }
    firebase.initializeApp(config)
  }
  
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    )
  }
}

export default App
