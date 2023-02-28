import { useEffect } from "react";
import { View, Text, Alert } from "react-native";
import ButtonPressable from "../component/ButtonPressable";
import { deleteFromDB, updateDB } from "../dataSource/FireStoreHelper";

export default function EditEntry({ route, navigation }) {

    const { calory, name, id, reviewed } = route.params.meal;

    const onDel = function d(id) {
        Alert.alert(
            'Confirmation of delete',
            'Are you sure you want to delete this entry?',
            [
              {
                text: 'No',
                style: 'cancel',
              },
              {
                text: 'Yes',
                onPress: () => {
                    deleteFromDB({docid: id});
                    navigation.popToTop();
                },
              },
            ],
            { cancelable: false }
        );
    };

    const onUd = function u(id) {
        Alert.alert(
            'Confirmation of review',
            'Are you sure you want to review this entry?',
            [
              {
                text: 'No',
                style: 'cancel',
              },
              {
                text: 'Yes',
                onPress: () => {
                    updateDB({docid: id});
                    navigation.popToTop();
                },
              },
            ],
            { cancelable: false }
        );
    };

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
                {!reviewed && (
                    <ButtonPressable
                        onPressed={() => {onUd(id);}}
                    >
                    <Text>
                        rev
                    </Text>
                    </ButtonPressable>
                )}
            </View>
        </View>
    );
}