
const firebaseConfig = {
      apiKey: "AIzaSyD6d5tBs-aAgiC_lzaEfSsj0CQCZoEDhfQ",
      authDomain: "kwitter-66a49.firebaseapp.com",
      databaseURL: "https://kwitter-66a49-default-rtdb.firebaseio.com",
      projectId: "kwitter-66a49",
      storageBucket: "kwitter-66a49.appspot.com",
      messagingSenderId: "873028192105",
      appId: "1:873028192105:web:524b70335636f530289ff8"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
