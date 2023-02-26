import { useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import myStyling from "../resource/MyStyles";

export default function ButtonPressable({ 
    children,
    onPressed,
    selfStyle
    }) {
        
    return (
        <Pressable
            onPress={onPressed}
            style={({ pressed }) => {
                return [
                  myStyling.generalButton,
                  selfStyle,
                  pressed && myStyling.pressedButton
                ];
              }}
        >
            {children}
        </Pressable>
    );
}