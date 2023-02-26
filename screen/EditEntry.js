import { useEffect } from "react";
import { View, Text } from "react-native";
import ButtonPressable from "../component/ButtonPressable";

export default function EditEntry({ route, navigation, meal }) {

    const { calory, mealName, id } = meal;

    return (
        <View>
            <View>
                <View>
                    <Text>
                        Calories
                    </Text>
                    <Text>
                        { calory }
                    </Text>
                </View>
                <View>
                    <Text>
                        Description
                    </Text>
                    <Text>
                        { mealName }
                    </Text>
                </View>
                <ButtonPressable>
                    del
                </ButtonPressable>
                <ButtonPressable>
                    rev
                </ButtonPressable>
            </View>
        </View>
    );
}