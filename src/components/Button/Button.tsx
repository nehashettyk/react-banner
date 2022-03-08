import React from "react";
import {View} from "react-native";
import {Button} from "react-native-elements";

export interface ButtonProps {
  label: string;
}

const Buttons = (props: ButtonProps) => {
  return (
    <View>
      <Button>Dismiss</Button>
    </View>
  );
};

export default Buttons;