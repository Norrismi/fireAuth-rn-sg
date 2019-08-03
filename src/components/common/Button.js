import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = (props) => {
  return (
    <TouchableOpacity
      onPress={ props.onPress}
      style={styles.buttonStyle}
    >
      <Text style={styles.textStyle}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    color: "#007aff",
    fontWeight: "600",
    fontSize: 16,
    alignSelf: "center",
    paddingTop: 5,
    paddingBottom: 5
  },
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5
  }
};

export  {Button};
