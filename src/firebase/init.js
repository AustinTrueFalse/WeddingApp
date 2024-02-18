import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDiQbO5GweTHumo9dghGZfxERhLD0d5QnA",
  authDomain: "weddingapp-1a905.firebaseapp.com",
  projectId: "weddingapp-1a905",
  storageBucket: "weddingapp-1a905.appspot.com",
  messagingSenderId: "854891408355",
  appId: "1:854891408355:web:088805bf470791e4cf8ed6"
};

initializeApp(firebaseConfig)

const db = getFirestore()
export default db