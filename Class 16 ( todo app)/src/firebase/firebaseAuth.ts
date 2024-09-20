import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { app } from './firebaseConfig'
import { createUser } from './firebaseDb';

const auth = getAuth(app)

export const handleSignUp = (name: string, rollNumber: string, email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user);
            handleVerify()
            // ...
            createUser({studentName: name, rollNumber, email, uid: user.uid})
        })
        .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);

            // ..
        });
}

export const handleSignIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            handleVerify()
            // ...
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);

        });
}

export const handleVerify = () => {
    if (auth.currentUser) {
        sendEmailVerification(auth?.currentUser)
            .then(() => {
                // Email verification sent!
                // ...
                console.log("send verification");

            });
    }

}


export const handleLogout = () => {
    signOut(auth)
    .then(() => {
     console.log('logout succesfully');
     
    })
 }


export default auth