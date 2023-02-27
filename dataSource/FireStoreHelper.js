import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { firestore } from "./firebase-setup";

const collectId = 'meals';

export async function writeToDB( { data } ) {
    try {
        const docRef = await addDoc(collection(firestore, collectId), data);
        console.log("Document writted id: ", docRef.id);
    } catch (err) {
       console.err(err); 
    }
}

export async function deleteFromDB({ docid }) {
    try {
        await deleteDoc(doc(firestore, collectId, docid));
    } catch (err) {
        console.err(err);
    }
}

export async function updateDB({ docid }) {
    try {
        const docRef = doc(firestore, collectId, docid);
        await updateDoc(docRef, {
            reviewed: true
        });
    } catch (err) {
        console.err(err);
    }
}






