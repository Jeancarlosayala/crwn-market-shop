import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCJeKI1vCAD6XmHMc2fh2U2zEPzRua3loo",
  authDomain: "crwn-clothing-db-6c01e.firebaseapp.com",
  projectId: "crwn-clothing-db-6c01e",
  storageBucket: "crwn-clothing-db-6c01e.appspot.com",
  messagingSenderId: "570276939842",
  appId: "1:570276939842:web:ccbef29f4f04244c69c5db"
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserAuth = async (userAuth) => {
  const getUserDoc = doc(db, 'users', userAuth.uid);
  console.log(getUserDoc);

  const userSnapsShot = await getDoc(getUserDoc);
  console.log(userSnapsShot);
  console.log(userSnapsShot.exists());

  if(!userSnapsShot.exists()){
    const {displayName, email} = userAuth;
    const createAdt = new Date();

    try {
      await setDoc(getUserDoc, {
        displayName, 
        email,
        createAdt
      })
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return getUserDoc;
}

