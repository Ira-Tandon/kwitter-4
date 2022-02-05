const firebaseConfig = {
      apiKey: "AIzaSyB3Mw2Np_Ru7ZFAhWUW3suh1BO9-n4dgEY",
      authDomain: "kwitter-2-cd9c3.firebaseapp.com",
      databaseURL: "https://kwitter-2-cd9c3-default-rtdb.firebaseio.com",
      projectId: "kwitter-2-cd9c3",
      storageBucket: "kwitter-2-cd9c3.appspot.com",
      messagingSenderId: "93713210016",
      appId: "1:93713210016:web:e16ca0d7ac496f6a0e87c5"
};
//FIREBASE LINKS
firebase.initializeApp(config);
var user_name= localStorage.getItem("user_name");
var room_name=localStorage.getitem("room_name");

function getData() { 
      firebase.database().ref("/"+room_name).on('value',
       function(snapshot) {
              document.getElementById("output").innerHTML = "";
               snapshot.forEach(function(childSnapshot) {
                      childKey  = childSnapshot.key;
                       childData = childSnapshot.val();
                        if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
  } ;
 }); 
 });
  };
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
    };

    function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").innerHTML="";
};