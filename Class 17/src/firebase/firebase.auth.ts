import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updatePassword, sendEmailVerification } from 'firebase/auth'
import { app } from './firebase.config'
import { createAndFetchUser } from './firebase.firestore'
const auth = getAuth(app)

export const handleSignUp = async (name: string, rollNumber: string, email: string, password: string) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password)
        createAndFetchUser({name, rollNumber, email, uid: user.uid})
    } catch (e) {
        console.error(e);
    }
}

export const handleSignIn = async (email: string, password: string) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password)
    } catch (e) {
        console.error(e);
    }
}

export const handleSignOut = async () => {
    try {
        await signOut(auth)
    } catch (e) {
        console.error(e);
    }
}

export const handleUpdatePassword = (newPassword: string) => {
    try {
        const user: any = auth.currentUser
        updatePassword(user, newPassword)
    } catch (e) {
        console.error(e);
    }
}

export const handleVerify = async () => {
    try {
        if(auth.currentUser) await sendEmailVerification(auth.currentUser)
    } catch (e) {
        
    }
}

export default auth