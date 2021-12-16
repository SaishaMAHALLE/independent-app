 //ADD YOUR FIREBASE LINKS



 // Your web app's Firebase configuration

 //c93
 const firebaseConfig = {
  apiKey: "AIzaSyBKH0SCwMMAJlkVDLKRUUn_8skRiHdbv5M",
  authDomain: "ruby-high-school-cfwf.firebaseapp.com",
  databaseURL: "https://ruby-high-school-cfwf-default-rtdb.firebaseio.com",
  projectId: "ruby-high-school-cfwf",
  storageBucket: "ruby-high-school-cfwf.appspot.com",
  messagingSenderId: "139226912755",
  appId: "1:139226912755:web:bc849bd8e5e48d797f6486",
  measurementId: "G-ZFE6RD654F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// C-95
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";






function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}



function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}






// C-96
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
