console.log('hello')
var config = {
    apiKey: "AIzaSyAFbG5OTURzmTKd56urpCvMyDcnoHGvnF8",
    authDomain: "portfolio-saumya.firebaseapp.com",
    databaseURL: "https://portfolio-saumya.firebaseio.com",
    projectId: "portfolio-saumya",
    storageBucket: ""
  };

  firebase.initializeApp(config);
    var dataRef = firebase.database();
 
    var name = "";
    var email = "";
    var comment = "";

    
    $("#submit").on("click", function(event) {
      event.preventDefault();
      
      name = $("#exampleInputName").val().trim();
      email = $("#exampleInputEmail1").val().trim();
      comment = $("#exampleFormControlTextarea1").val().trim();
      dataRef.ref().push({
        name: name,
        email: email,
        comment: comment,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
    });

    dataRef.ref().on("child_added", function(snapshot) {

      console.log(snapshot.val().name);
      console.log(snapshot.val().email);
      console.log(snapshot.val().comment);
     
    });