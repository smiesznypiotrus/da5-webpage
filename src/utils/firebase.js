// // utils/firebase.js
// import React, { createContext } from 'react'
// //import * as app from 'firebase/app'

// import "@firebase/app";
// import app from "@firebase/app";
// import "@firebase/firestore";

// const FirebaseContext = createContext(null)
// export { FirebaseContext }

// export default ({ children }) => {
//     if (!app.apps.length) {
//       console.log(process.env.GATSBY_PROJECTID)
//       app.initializeApp({
//         apiKey: process.env.GATSBY_APIKEY,
//         authDomain: process.env.GATSBY_AUTHDOMAIN,
//         databaseURL: process.env.GATSBY_DATABASEURL,
//         projectId: process.env.GATSBY_PROJECTID,
//         storageBucket: process.env.GATSBY_STORAGEBUCKET,
//         messagingSenderId: process.env.GATSBY_MESSAGINGSENDERID,
//         appId: process.env.GATSBY_APPID,
//         measurementId: process.env.GATSBY_MEASUREMENTID,
//       })
//       // app.initializeApp({
//       //   apiKey: "AIzaSyBne14E4wgvPQyvFFctwIhDqK4_uXybtwI",
//       //   authDomain: "da5-webpage.firebaseapp.com",
//       //   databaseURL: "https://da5-webpage.firebaseio.com",
//       //   projectId: "da5-webpage",
//       //   storageBucket: "da5-webpage.appspot.com",
//       //   messagingSenderId: "204214012808",
//       //   appId: "1:204214012808:web:3c8d81a5b6aa9fad55c83d",
//       //   measurementId: "G-T6Z4R02ZXV"
//       // })
//     }
//     return (
//       <FirebaseContext.Provider value={ app }>
//         { children }
//       </FirebaseContext.Provider>
//     )
//   }