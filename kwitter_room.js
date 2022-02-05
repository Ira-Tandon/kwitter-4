//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyB3Mw2Np_Ru7ZFAhWUW3suh1BO9-n4dgEY",
  authDomain: "kwitter-2-cd9c3.firebaseapp.com",
  databaseURL: "https://kwitter-2-cd9c3-default-rtdb.firebaseio.com",
  projectId: "kwitter-2-cd9c3",
  storageBucket: "kwitter-2-cd9c3.appspot.com",
  messagingSenderId: "93713210016",
  appId: "1:93713210016:web:e16ca0d7ac496f6a0e87c5"
};
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+ "!";
    function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        pupose: "adding roomname"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html"
    }
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'> #"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
//End code
});});}
getData();
function redirecttoroomname(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html"
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}