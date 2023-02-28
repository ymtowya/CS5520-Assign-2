import { useEffect } from "react";
import { View, Text, Alert } from "react-native";
import ButtonPressable from "../component/ButtonPressable";
import { deleteFromDB, updateDB } from "../dataSource/FireStoreHelper";
import myStyling from "../resource/MyStyles";

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
            <View style={myStyling.myCardo}>
                <View style={[myStyling.rowAlignContainer, myStyling.textAlignContainer]}>
                    <Text style={myStyling.boldText}>
                        Calories: 
                    </Text>
                    <Text style={myStyling.longText}>
                        { calory }
                    </Text>
                </View>
                <View style={[myStyling.rowAlignContainer, myStyling.textAlignContainer]}>
                    <Text style={myStyling.boldText}>
                        Description: 
                    </Text>
                    <Text style={myStyling.longText}>
                        { name }
                    </Text>
                </View>
                <View style={myStyling.rowAlignContainer}>
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
        </View>
    );
}