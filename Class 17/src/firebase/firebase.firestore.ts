import { getFirestore, doc, setDoc, collection, addDoc, getDoc, getDocs, where, query } from 'firebase/firestore'
import { app } from './firebase.config'
import auth from './firebase.auth'
const db = getFirestore(app)

type UserType = {
    name: string,
    rollNumber: string,
    email: string,
    uid: string
}

export const createAndFetchUser = async (user: UserType) => {
    try {
        const docRef = doc(db, "users", user.uid)
        await setDoc(docRef, user)
        const foundUser = await getDoc(docRef)
        console.log(foundUser.data());
        // handleSendUser({name: foundUser.data()?.name, rollNumber: foundUser.data()?.rollNumber, email: foundUser.data()?.email})
    } catch (e) {
        console.error(e);
    }
}

export const handleAddTodo = async (todo: string) => {
    try {
        const collectionRef = collection(db, "todos")
        const uid = auth.currentUser?.uid
        await addDoc(collectionRef, { todo, uid })
    } catch (e) {
        console.error(e);
    }
}

export const fetchTodos = async () => {
    try {
        const collectionRef = collection(db, "todos")
        const uid = auth.currentUser?.uid
            const condition = where("uid", "==", uid)
            const q = query(collectionRef, condition)
            const todoSnapshot = await getDocs(q)
            todoSnapshot.forEach((todo) => {
                console.log(todo.id + "=>" + todo.data().todo);
            })
    } catch (e) {
        console.error(e);
    }
}