import { useEffect } from "react";
import { View, Text, TextInput, Pressable } from "react-native";

export default function AddEntry({ route, navigation }) {

    return (
        <View>
            <View>
                <Text>
                    Calories
                </Text>
                <TextInput>
                </TextInput>
                <Text>
                    Description
                </Text>
                <TextInput>
                </TextInput>
            </View>

            <View>
                <Pressable>
                    <Text>
                        Reset
                    </Text>
                </Pressable>
                <Pressable>
                    <Text>
                        Submit
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}