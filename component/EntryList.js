import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import EntryItem from "./EntryItem";

export default function EntryList({ route, navigation }) {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(firestore, "meals"), (querySnapShot) => {
          if (querySnapShot.empty) {
            setMeals([]);
          } else {
            let mealsfromdb = [];
            querySnapShot.docs.forEach((snapDoc) => {
              mealsfromdb.push({...snapDoc.data(), id: snapDoc.id});
            });
            setMeals(mealsfromdb);
          }
          // console.log(JSON.stringify(querySnapShot.docs[0]));
        });
        // return a clean up func
        return () => {
          // detach listener
          unsubscribe();
        }
    }, []); // dependency arr  

    // meals = [
    //     {
    //         mealName: 'br',
    //         calory: 100,
    //         id: 1
    //     },
    //     {
    //         mealName: 'op',
    //         calory: 70,
    //         id: 2
    //     }
    // ];

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