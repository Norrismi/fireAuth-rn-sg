import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";

import { Header } from "./src/components/common";
import LoginForm from "./src/components/LoginForm";

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBXGXTJxvpN6bmVMS-hoRAb2o85oqDGnf8",
      authDomain: "auth-rn-sg.firebaseapp.com",
      databaseURL: "https://auth-rn-sg.firebaseio.com",
      projectId: "auth-rn-sg",
      storageBucket: "",
      messagingSenderId: "319937528210",
      appId: "1:319937528210:web:a4a0dceb5ad12bfb"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Auth" />
        <LoginForm/>
      </View>
    );
  }
}

// const styles = {
//   container: {}
// };

export default App;
