import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBMXNDRSWdwrzLtdxvBrRVPax869wF4OiY",

  authDomain: "financepeer-87897.firebaseapp.com",

  projectId: "financepeer-87897",

  storageBucket: "financepeer-87897.appspot.com",

  messagingSenderId: "332996940639",

  appId: "1:332996940639:web:5233dcc240eeca66da5cea",

  measurementId: "G-9SDP3QKD93"

})

export const auth = app.auth()
export default app
