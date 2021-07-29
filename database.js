// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBQbaP75_NmtZ-3Kz6Bb7QvihqZvRybpQc",
  authDomain: "javasdb-743d6.firebaseapp.com",
  projectId: "javasdb-743d6",
  storageBucket: "javasdb-743d6.appspot.com",
  messagingSenderId: "704084436358",
  appId: "1:704084436358:web:a8f1a32b533d5b43fef807"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database()

function save() {

  if (document.getElementById("name").value != "" || document.getElementById("lname").value != "" || document.getElementById("email").value != "" || document.getElementById("phone").value != "" || document.getElementById("name").value != "") {
    console.log(document.getElementById("alert").innerHTML = "");
    var fname = document.getElementById("name").value
    var lname = document.getElementById("lname").value
    var email = document.getElementById("email").value
    var phone = document.getElementById("phone").value
    var message = document.getElementById("message").value

    database.ref('client/' + fname).set({
      FirstName: fname,
      LastName: lname,
      Email: email,
      Phone: phone,
      Message: message
    })
    document.getElementById("name").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";

  } else {
    document.getElementById("alert").innerHTML = "por favor rellene los datos para enviar el formulario"
  }
}

