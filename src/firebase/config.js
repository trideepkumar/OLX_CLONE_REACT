import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD2SdKQ3R5ZKberj6pOGNp4UJzC9LqntlI",
    authDomain: "olx-clone-90200.firebaseapp.com",
    projectId: "olx-clone-90200",
    storageBucket: "olx-clone-90200.appspot.com",
    messagingSenderId: "1062612962516",
    appId: "1:1062612962516:web:01aae2b04ae01a27bbff41",
    measurementId: "G-S2MH6M9ZS1"
  };

 export default  firebase.initializeApp(firebaseConfig)

