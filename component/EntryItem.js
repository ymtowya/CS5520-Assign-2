import { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import myStyling from "../resource/MyStyles";
import ButtonPressable from "./ButtonPressable";
import { AntDesign } from '@expo/vector-icons';

export default function EntryItem({ route, navigation, meal }) {

    const { name, calory, id, reviewed } = meal;
    const insertIcon = (
        <AntDesign name="exclamationcircle" size={15} color={myStyling.black} />
    );


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
                <Text style={myStyling.tagText} numberOfLines={1} ellipsizeMode='tail'>
                    {name}
                </Text>
                <View style={myStyling.rowAlignContainer}>
                    {!reviewed && insertIcon}
                    <Text style={myStyling.tagButn}>
                        {calory}
                    </Text>
                </View>
            </ButtonPressable>
        </View>
    );
}