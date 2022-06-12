import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCJeKI1vCAD6XmHMc2fh2U2zEPzRua3loo",
  authDomain: "crwn-clothing-db-6c01e.firebaseapp.com",
  projectId: "crwn-clothing-db-6c01e",
  storageBucket: "crwn-clothing-db-6c01e.appspot.com",
  messagingSenderId: "570276939842",
  appId: "1:570276939842:web:ccbef29f4f04244c69c5db"
};

initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)


export const db = getFirestore()

export const createUserAuth = async (userAuth, additionalInformation = {}) => {

  if (!userAuth) return;

  const getUserDoc = doc(db, 'users', userAuth.uid);

  const userSnapsShot = await getDoc(getUserDoc);

  if (!userSnapsShot.exists()) {
    const { displayName, email } = userAuth;
    const createAdt = new Date();

    try {
      await setDoc(getUserDoc, {
        displayName,
        email,
        createAdt,
        ...additionalInformation
      })
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return getUserDoc;
}


export const createUserEmail = async (email, password) => {

  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInWithEmail = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password)
}