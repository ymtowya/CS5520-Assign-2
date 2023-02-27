import { useEffect } from "react";
import { View, Text } from "react-native";
import ButtonPressable from "../component/ButtonPressable";
import { deleteFromDB, updateDB } from "../dataSource/FireStoreHelper";

export default function EditEntry({ route, navigation }) {

    const { calory, name, id, reviewed } = route.params.meal;

    const onDel = function d(id) {
        deleteFromDB({docid: id});
        navigation.popToTop();
    }

    const onUd = function u(id) {
        updateDB({docid: id});
        navigation.popToTop();
    }

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
                        { name }
                    </Text>
                </View>
                <ButtonPressable
                    onPressed={() => {onDel(id);}}
                >
                    <Text>
                        del
                    </Text>
                </ButtonPressable>
                <ButtonPressable
                    onPressed={() => {onUd(id);}}
                >
                    <Text>
                        rev
                    </Text>
                </ButtonPressable>
            </View>
        </View>
    );
}