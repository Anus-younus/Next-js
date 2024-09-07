import { app } from './firebase.config'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export async function createUserWithCreadentials(email: string, password: string) {
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password)
        console.log(user.user.uid);
    } catch (error) {
        console.error(error);
    }
}


export async function signInUserWithCreadentials(email: string, password: string) {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password)
        console.log(user.user.uid);
    } catch (error) {
        console.error(error);
    }
}

export const auth = getAuth(app)