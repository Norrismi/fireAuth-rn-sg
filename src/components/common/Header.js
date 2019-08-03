import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = props => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  viewStyle: {
    height: 60,
    backgroundColor: "#F8F8F8",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    //paddingTop: 15,
    marginTop: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative"
  },
  
  textStyle: {
    fontSize: 20
  }
});

export {Header};