import { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import myStyling from "../resource/MyStyles";
import ButtonPressable from "./ButtonPressable";

export default function EntryItem({ route, navigation, meal }) {

    const { name, calory, id, reviewed } = meal;
    let insertIcon = (<Text></Text>);
    if (!reviewed) {
        insertIcon = (
            <Text>
                X
            </Text>
        );
    };

    const onp = function onp(id) {
        navigation.navigate('Edit', {
            meal: meal
        });
    };

    return (
        <View>
            <ButtonPressable
                onPressed={() => {onp(id);}}
            >
                <Text style={myStyling.tagText}>
                    {name}
                </Text>
                <View style={{justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',}}>
                    {insertIcon}
                    <Text style={myStyling.tagButn}>
                        {calory}
                    </Text>
                </View>
            </ButtonPressable>
        </View>
    );
}