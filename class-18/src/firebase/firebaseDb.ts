import { getFirestore, doc, setDoc, collection, addDoc, where, query, getDocs, Timestamp } from 'firebase/firestore'
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

export const fetchTodos = async () => {
    try {
        const uid = localStorage.getItem('uid')
        const collectionRef = collection(db, "todos")
        const condition = where('uid', '==', uid)
        const q = query(collectionRef, condition)
        const snapshot = await getDocs(q)
        const todos = snapshot.docs
       const allTodos = todos.map((todo) => {
            let todoData = todo.data()
            todoData.id = todo.id
            return todoData
       })
       return allTodos
        
    } catch (e) {
        
    }
}


export const createExpence = async (title: string, price: string, category: string, note: string) => {
    try {
        const collectionRef = collection(db, "expenses")
        await addDoc(collectionRef, {uid: auth.currentUser?.uid, title, price, category, date: Timestamp.fromDate(new Date), note})
    } catch (e) {
        
    }
}

// export const handle

export default db