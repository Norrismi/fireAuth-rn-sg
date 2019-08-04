import React, { Component } from "react";
import { Text } from "react-native";
import firebase from "firebase";
import { Button, Card, CardSection, Input, Spinner } from "./common";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    loading: false
  };

  //helper Method
  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: "", loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail(){
      this.setState({
          error: "Authentication Failed",
          loading: false
      })
  }

  onLoginSuccess() {
    this.setState({
      email: "",
      password: "",
      laoding: false,
      error: ""
    });
  }

  renderButton() {
    return this.state.loading ? (
      <Spinner size="small" />
    ) : (
      <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>
    );
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@gmail.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            placeholder="password123"
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.error}>{this.state.error}</Text>

        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  error: {
    color: "red",
    textAlign: "center",
    margin: 5,
    fontSize: 18
  }
};

export default LoginForm;
