var firebaseConfig = {
    apiKey: "AIzaSyCe2tDDOKAopd2L_LzD1QdHeXkP-_q9kqM",
    authDomain: "auth1-871c4.firebaseapp.com",
    projectId: "auth1-871c4",
    storageBucket: "auth1-871c4.appspot.com",
    messagingSenderId: "1016704580439",
    appId: "1:1016704580439:web:3fc149b55ff4ea40a0dc12"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth()
  
   console.log(auth)
  
  
  
  let signOutButton = document.getElementById("signout")
  signOutButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
    console.log("clicked")
    
    auth.signOut()
    alert("Signed Out")
    window.location = "index.html";
  })