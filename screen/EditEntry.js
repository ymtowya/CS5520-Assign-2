import { useEffect } from "react";
import { View, Text, Alert } from "react-native";
import ButtonPressable from "../component/ButtonPressable";
import { deleteFromDB, updateDB } from "../dataSource/FireStoreHelper";
import myStyling from "../resource/MyStyles";
import { AntDesign } from '@expo/vector-icons';

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
                        <AntDesign name="delete" size={18} color={myStyling.black} />
                    </ButtonPressable>
                    {!reviewed && (
                        <ButtonPressable
                            onPressed={() => {onUd(id);}}
                        >
                        <AntDesign name="pushpino" size={18} color={myStyling.black} />
                        </ButtonPressable>
                    )}
                </View>
            </View>
        </View>
    );
}