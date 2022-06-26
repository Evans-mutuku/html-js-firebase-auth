var firebaseConfig = {
  apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  databaseURL: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  projectId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  storageBucket: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  messagingSenderId: "7xxxxxxxxxxxxxxxxxxxxxxxxxxxxx89752125493",
  appId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  measurementId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

console.log(auth);

let signOutButton = document.getElementById("signout");
signOutButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault();
  console.log("clicked");

  auth.signOut();
  alert("Signed Out");
  window.location = "home.html";
});
