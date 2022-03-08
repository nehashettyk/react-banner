import React from "react";
import {View, Text} from "react-native";
import {Button} from "react-native-elements";

export interface ButtonProps {
  label?: string;
}

const Buttons = (props: ButtonProps) => {
  return (
    <View>
      <Button><Text>Dismiss</Text></Button>
    </View>
  );
};

export default Buttons;