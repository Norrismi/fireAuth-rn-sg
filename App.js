import React, { Component } from "react";
import { View, Button } from "react-native";
import firebase from "firebase";

import { Header, Spinner } from "./src/components/common";
import LoginForm from "./src/components/LoginForm";

class App extends Component {
  state = {
    loggedIn: null
  };

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

    firebase.auth().onAuthStateChanged(user => {
      return user
        ? this.setState({ loggedIn: true })
        : this.setState({ loggedIn: false });
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button title="Log out" onPress={() => firebase.auth().signOut()} />
        );

      case false:
        return <LoginForm />;

      default:
        return (
          <View style={styles.spinnerStyle}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText={"Auth"} />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  spinnerStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: "75%"
  }
};

export default App;
