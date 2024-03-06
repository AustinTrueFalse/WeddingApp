import { initializeApp } from 'firebase/app'
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from 'firebase/app-check';
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDiQbO5GweTHumo9dghGZfxERhLD0d5QnA",
  authDomain: "weddingapp-1a905.firebaseapp.com",
  projectId: "weddingapp-1a905",
  storageBucket: "weddingapp-1a905.appspot.com",
  messagingSenderId: "854891408355",
  appId: "1:854891408355:web:088805bf470791e4cf8ed6"
};

// initializeApp(firebaseConfig)


const firebaseApp = initializeApp(firebaseConfig);

initializeAppCheck(firebaseApp, {
  provider: new ReCaptchaEnterpriseProvider('6Lf6y40pAAAAAC05J_okJmPZ2-jGVec4aWXK0bl3'),
  isTokenAutoRefreshEnabled: true, // Установите true для разрешения автоматического обновления.
});

const db = getFirestore()
export default db