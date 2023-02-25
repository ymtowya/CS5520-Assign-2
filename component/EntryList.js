import { useEffect } from "react";
import { View, Text } from "react-native";

export default function EntryList({ route, navigation }) {

    useEffect(() => {
        navigation.setOptions({
            title: route.params.titleText
        });
    });

    return (
        <View>
            <Text>
                {route.params.titleText}
            </Text>
        </View>
    );
}