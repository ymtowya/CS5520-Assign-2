import { useEffect } from "react";
import { View, Text } from "react-native";
import EntryList from "../component/EntryList";

export default function AllEntry({ route, navigation }) {

    useEffect(() => {
        navigation.setOptions({
            title: route.params.titleText
        });
    });

    return (
        <View>
            <EntryList
                showWarnOnly={false}
                navigation={navigation}
                route={route}
            >
            </EntryList>
        </View>
    );
}