import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, where } from "firebase/firestore"; 


const firebaseConfig = {
    apiKey: "AIzaSyDf_8-VIGz4p_ql4viB88NiEbGrJ6Ya3rI",
    authDomain: "skillboard-82d4b.firebaseapp.com",
    projectId: "skillboard-82d4b",
    storageBucket: "skillboard-82d4b.appspot.com",
    messagingSenderId: "226245388388",
    appId: "1:226245388388:web:842a62fbdad557a0e05771"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const findDoc = async (info)=>{
  let queryItems = []
  const material = query(collection(db, "items"), where("category", "==", info));
  const querySnapshot = await getDocs(material);
querySnapshot.forEach((doc) => {
  queryItems.push(doc.data())
});

return queryItems
}

export default findDoc