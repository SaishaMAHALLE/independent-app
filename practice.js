
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCliJnB8gEmjABH-mp6MdchM3CuH0X5LW4",
    authDomain: "covid19bot-tklc.firebaseapp.com",
    databaseURL: "https://covid19bot-tklc-default-rtdb.firebaseio.com",
    projectId: "covid19bot-tklc",
    storageBucket: "covid19bot-tklc.appspot.com",
    messagingSenderId: "795322619841",
    appId: "1:795322619841:web:16bb57ca8eda2a14e4c140"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({purpose : "adding user"});
  }