import * as firebase from "firebase";

// Initialize Firebase

var config = {
  apiKey: "AIzaSyAze1jsUJ3oqE_hal4E03gTMdl-9eIwKD4",
  authDomain: "world-cup-bets-68b6e.firebaseapp.com",
  databaseURL: "https://world-cup-bets-68b6e.firebaseio.com",
  projectId: "world-cup-bets-68b6e",
  storageBucket: "world-cup-bets-68b6e.appspot.com",
  messagingSenderId: "260028003625"
};
firebase.initializeApp(config);

// Listen for authentication state to change.
firebase.auth().onAuthStateChanged(user => {
  if (user != null) {
    console.log("We are authenticated now!", user);
  } else {
    console.log("we are not authenticated");
  }
});

export async function loginWithFacebook(token) {
  // Build Firebase credential with the Facebook access token.
  const credential = firebase.auth.FacebookAuthProvider.credential(token);

  // Sign in with credential from the Facebook user.
  const result = await firebase.auth().signInWithCredential(credential);
  return result;
}
