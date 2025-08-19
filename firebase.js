  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
  import { getFirestore } from "firebase/firestore";

 
  const firebaseConfig = {
    apiKey: "AIzaSyAf96wPtZ3Dk1DszVU37EYORsWpjmW7elQ",
    authDomain: "api-1-611c1.firebaseapp.com",
    projectId: "api-1-611c1",
    storageBucket: "api-1-611c1.appspot.com",
    messagingSenderId: "369970813844",
    appId: "1:369970813844:web:41027bba8aeb54fb3f4d81",
    measurementId: "G-G8Z4XP3GJK"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export {db};
  

