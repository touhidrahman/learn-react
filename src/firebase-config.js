import firebase from 'firebase'

export const firebaseConfig = {
  apiKey: "AIzaSyAi7nEjTzgO7tHkkk4ZAQF1HEmMoICe6CQ",
  authDomain: "dev-test-thd.firebaseapp.com",
  databaseURL: "https://dev-test-thd.firebaseio.com",
  projectId: "dev-test-thd",
  storageBucket: "dev-test-thd.appspot.com",
  messagingSenderId: "476194911587",
  appId: "1:476194911587:web:2353d4f092e5c8c1"
};

const firebaseApp = firebase.initializeApp({
  ...firebaseConfig
})

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}