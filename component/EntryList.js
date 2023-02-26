import { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import EntryItem from "./EntryItem";

export default function EntryList({ route, navigation }) {

    const meals = [
        {
            mealName: 'br',
            calory: 100,
            id: 1
        },
        {
            mealName: 'op',
            calory: 70,
            id: 2
        }
    ];

    return (
        <View>
            <FlatList
                data={meals}
                renderItem={(meal) => {
                    return (
                        <EntryItem
                            meal={meal.item}
                        >
                        </EntryItem>
                    );
                }}
                keyExtractor={(meal) => {
                    return meal.id;
                }}
            >
            </FlatList>
        </View>
    );
}