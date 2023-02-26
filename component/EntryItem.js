import { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import ButtonPressable from "./ButtonPressable";

export default function EntryItem({ route, navigation, meal }) {

    const { mealName, calory } = meal;

    return (
        <View>
            <Text>
                {mealName}
            </Text>
            <ButtonPressable>
                <Text>
                    {calory}
                </Text>
            </ButtonPressable>
        </View>
    );
}