import { useEffect } from "react";
import { View, Text } from "react-native";
import EntryList from "../component/EntryList";

export default function OverEntry({ route, navigation }) {

    useEffect(() => {
        navigation.setOptions({
            title: route.params.titleText
        });
    });

    return (
        <View>
            <EntryList
                showReviewedOnly={true}
                navigation={navigation}
                route={route}
            >
            </EntryList>
        </View>
    );
}