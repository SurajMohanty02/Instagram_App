import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyBM-8mpl1CfRC5SMjT7fe6Hi1kWpLTp7Js",
  authDomain: "instagram-clone-33ab4.firebaseapp.com",
  databaseURL: "https://instagram-clone-33ab4.firebaseio.com",
  projectId: "instagram-clone-33ab4",
  storageBucket: "instagram-clone-33ab4.appspot.com",
  messagingSenderId: "1010859204182",
  appId: "1:1010859204182:web:40a3d58dbcad9a95fc65f7",
  measurementId: "G-6H5F6EBJ7Z",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, storage };
export default db;
