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
            android_ripple={{ color: 'grey', radius: 20 }}
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