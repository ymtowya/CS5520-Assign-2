import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable, Alert } from "react-native";
import ButtonPressable from "../component/ButtonPressable";
import { writeToDB } from "../dataSource/FireStoreHelper";
import myStyling from "../resource/MyStyles";

function isValidNumber(p) {
    return !isNaN(p);
}

export default function AddEntry({ route, navigation }) {

    const [ calory, setCalory ] = useState('');
    const [ name, setName ] = useState('');

    
    const rfunc = function reset() {
        setCalory('');
        setName('');
    };

    console.log(route.params.limitr);

    const sfunc = function submit() {
        if (!isValidNumber(calory) || name == '') {
            Alert.alert('Input invalid',
                'Input calory is invalid form.');
            return;
        }
        const newMeal = {
            name: name,
            calory: parseInt(calory),
            reviewed: parseInt(calory) > route.params.limit ? true : false,
            key: Math.random()
        };
        writeToDB({ meal: newMeal });
        // navigation.navigate('Home');
    };

    return (
        <View>
            <View>
                <Text>
                    Calories
                </Text>
                <TextInput
                    value={calory}
                    onChangeText={ txt => setCalory(txt.trim()) }
                    style={ myStyling.inputBox }
                >
                </TextInput>
                <Text>
                    Description
                </Text>
                <TextInput
                    value={name}
                    onChangeText={ txt => setName(txt) }
                    style={ myStyling.inputBox }
                >
                </TextInput>
            </View>

            <View>
                <ButtonPressable
                    onPressed={() => {rfunc();}}
                >
                    <Text>
                        Reset
                    </Text>
                </ButtonPressable>
                <ButtonPressable
                    onPressed={() => {sfunc();}}
                >
                    <Text>
                        Submit
                    </Text>
                </ButtonPressable>
            </View>
        </View>
    );
}