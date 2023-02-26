import { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import EntryItem from "./EntryItem";

export default function EntryList({ route, navigation, meals }) {

    const entryItem = (
        <EntryItem
            
        >
        </EntryItem>
    );

    return (
        <View>
            <FlatList
                data={meals}
                renderItem={entryItem}
                keyExtractor={(meal) => meal.id}
            >
            </FlatList>
        </View>
    );
}