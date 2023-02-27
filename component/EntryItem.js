import { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import myStyling from "../resource/MyStyles";
import ButtonPressable from "./ButtonPressable";

export default function EntryItem({ route, navigation, meal }) {

    const { name, calory, id } = meal;

    return (
        <View>
            <ButtonPressable>
                <Text style={myStyling.tagText}>
                    {name}
                </Text>
                <Text style={myStyling.tagButn}>
                    {calory}
                </Text>
            </ButtonPressable>
        </View>
    );
}