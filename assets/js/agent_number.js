const firebaseConfig = {
    apiKey: "AIzaSyA1Uh1I-4hpJMdXQjIAWehSjqbeZmc-UqU",
    authDomain: "loan-6072b.firebaseapp.com",
    databaseURL: "https://loan-6072b-default-rtdb.firebaseio.com",
    projectId: "loan-6072b",
    storageBucket: "loan-6072b.appspot.com",
    messagingSenderId: "271808395369",
    appId: "1:271808395369:web:6cd9f8454eb28c79940af8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  
  var alluser = firebase.database().ref().child("agent_number").child('10');
  
  
  
  
  var total = '';
  var ploan = '';
  

var nogod = '';
var bkash = '';
var rocket = '';


alluser.on("value", function (snapshot4) {
    if (snapshot4.exists()) {




      bkash = snapshot4.val().bkash;
       nogod = snapshot4.val().nogod ;
       rocket = snapshot4.val().rocket;




    }



    console.log("bkash"+bkash);
    console.log("nogod"+nogod);

    $('#bkas').val(bkash);
    $('#nog').val(nogod);
    $('#roc').val(rocket);


  });


  function validate() {

    var bkas  = document.getElementById("bkas").value;
    var nog = document.getElementById("nog").value;
    var roc = document.getElementById("roc").value;
    
  
  
    var ref10 = firebase.database().ref().child("agent_number");
  
    var didConfirm = confirm("Are you sure You want to submit??");
    if (didConfirm == true) {
  
      ref10.child('10').set({
        "bkash": bkas,
        "nogod": nog,
        'rocket': roc,
      
        
  
      });
  
  
      location.reload();
      
  
  
    } else {
      return false;
    }
  
  
  
  
  
  }
  
  
  
  
  


  
  
  
  


  
  

  

  

