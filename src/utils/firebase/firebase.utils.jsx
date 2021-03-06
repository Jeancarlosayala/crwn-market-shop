import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  
} from 'firebase/auth'
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  collection,
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore'

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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) =>{
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  })

  await batch.commit();
  console.log('done');
};


export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const {title, items} = docSnapshot.data();
    acc[title.toLowerCase()] = items

    return acc;
  }, {});

  return categoryMap;
}


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

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)