import { addDoc, collection, doc } from "firebase/firestore";
import { firestore } from "./firebase-setup";

const collectId = 'meals';

export async function writeToDB( { data } ) {
    try {
        const docRef = await addDoc(collection(firestore, collectId), data);
        console.log("Document writted id: ", docRef.id);
    } catch (err) {
       console.log(err); 
    }
}

export async function deleteFromDB({ docid }) {
    try {
        await deleteDoc(doc(firestore, collectId, docid));
    } catch (err) {
        console.log(err);
    }
}






