import { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import myStyling from "../resource/MyStyles";
import ButtonPressable from "./ButtonPressable";

export default function EntryItem({ route, navigation, meal }) {

    const { mealName, calory } = meal;



    return (
        <View>
            <ButtonPressable>
                <Text style={myStyling.tagText}>
                    {mealName}
                </Text>
                <Text style={myStyling.tagButn}>
                    {calory}
                </Text>
            </ButtonPressable>
        </View>
    );
}