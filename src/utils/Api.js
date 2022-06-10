
import { trackPromise} from 'react-promise-tracker';
import { ToastContainer, toast } from 'react-toastify';

// Import the functions you need from the SDKs you need
import { initializeApp,  } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  GoogleAuthProvider,
    getAuth,
 signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,onAuthStateChanged
} from "firebase/auth";
import {  getFirestore,
  query,
  getDocs,
  collection,
  where,
 addDoc,
 } from "firebase/firestore";
 import { useAuthState } from 'react-firebase-hooks/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJMCCP7eg129TVNBpi-Ei0ZJSzrT9iA-A",
  authDomain: "dzidza-2506.firebaseapp.com",
  projectId: "dzidza-2506",
  storageBucket: "dzidza-2506.appspot.com",
  messagingSenderId: "347863212872",
  appId: "1:347863212872:web:ffcebb01ee42318962c97d",
  measurementId: "G-N6TBGXQHEC"
};

const {OAuth2Client} = require('google-auth-library');
const axios = require('axios').default;
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
var API_URL=null
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    API_URL="http://localhost:8888/.netlify/functions"
} else {
    API_URL="http://dzidza-functions.netlify.app/.netlify/functions"
}

axios.defaults.baseURL = API_URL
axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
// axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export const client_id =
  '1099477592609-9vmt7pl1s2rjvl3iru1hs87muorsbuag.apps.googleusercontent.com';

export const auth = getAuth(app);












//GOOGLE AUTHENTICATION REGULAR


export const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,

        displayName: name,
        authProvider: "local",
        email,
      });
      sessionStorage.setItem("notify", "logged_in")
      document.location.href="/forum"
     
    } catch (err) {
      console.error(err);
      toast.error(err.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
        });
    }
    // localStorage.setItem('user', JSON.stringify(user));
  };

  export const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    toast.error(err.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
      });
  }
};





//GOOGLE LOG IN
export const getDecodedOAuthJwtGoogle = async token => {

  const CLIENT_ID_GOOGLE = client_id

  try {
    const client = new OAuth2Client(CLIENT_ID_GOOGLE)

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID_GOOGLE,
    })

    return ticket
  } catch (error) {
    return { status: 500, data: error }
  }
}
export const setUserGoogleLogin = async response => {
}
// export const setUserGoogleLogin = async response => {
//   try {
//   const user = await getDecodedOAuthJwtGoogle(response.credential)
//   // console.log(response.credential)

//     // console.log(result.payload.name) // "Some User token"

//     const q = query(collection(db, "users"), where("uid", "==", user.uid));
//     const docs = await getDocs(q);
//     if (docs.docs.length === 0) {
//       await addDoc(collection(db, "users"), {
//         uid: user.uid,
//         name: user.displayName,
//         authProvider: "google",
//         email: user.email,
//       });
//     }
//     localStorage.setItem('user', JSON.stringify(user));
//     localStorage.setItem('loggedIn', true)
//     console.log(JSON. parse(localStorage.getItem('user')).name)
//     document.location.reload(true)

// } catch (err) {
//   console.error(err);
//   toast.error(err.message, {
//     position: "top-right",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "dark"
//     });
// }
// }

export const signUserInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
    sessionStorage.setItem("notify", "logged_in")
    document.location.href="/forum"
  } catch (err) {
    console.error(err);
    toast.error(err.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
      });
  }
};
export const  logout = async () => {
  // var auth = getAuth();
  await auth.signOut()
    // toast.success("Logged Out", {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "dark"
    //   });
    localStorage.clear()
  
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(user)
    var userNew={}
    for (var key of Object.keys(user)) {
      userNew[key]=user[key]
  
    }
    if (user.displayName!=null){
      userNew.name=user.displayName
    }
    
    userNew.picture=user.photoURL
    // if ()
    if (JSON.parse(localStorage.getItem('user'))!=userNew){
      localStorage.setItem('user', JSON.stringify(userNew))
    }
    
    // toast.success("Logged in", {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "dark"
    //   });
    // ...
  } else {
   console.log("not Logged In")
   localStorage.clear()
  }
});







//DZIDZA FUNCTIONS
export const getQuestions = async()=> {
    return await axios.get('/getQuestions').then(response => {
      return response.data;
    }).catch(error => {
      console.log(error);
    })
  }
export function getQuestion(){
    console.log("calling2")
  
}
export function checkUser(){
    if (localStorage.getItem("user")==null){
        return false
    }
    //future check if user is really a valid user
    console.log(localStorage.getItem("user"))
    return true
}