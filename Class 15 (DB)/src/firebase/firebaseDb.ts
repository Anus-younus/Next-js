import { getFirestore, doc, setDoc, collection, addDoc } from 'firebase/firestore'
import { app } from './firebaseConfig'
import { TodoType, UserType } from '@/Types/UserType'
import auth from './firebaseAuth'

const db = getFirestore(app)

export const createUser = async (user: UserType) => {
    try {
        const docRef = doc(db, "users", user.uid)
        await setDoc(docRef, user)
    } catch (e) {
        console.error(e);
    }
}

export const createTodo = async (todo: string) => {
    try {
        const collectionRef = collection(db, 'todos')
        const uid = auth.currentUser?.uid
        await addDoc(collectionRef, { todo, uid })
    } catch (error) {

    }
}

export default db