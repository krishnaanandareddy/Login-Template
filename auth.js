firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        // ...

        document.getElementById('login').style.display = "none";
        document.getElementById('logged').style.display = "block";
    } else {
        // User is signed out
        // ...
        document.getElementById('login').style.display = "block";
        document.getElementById('logged').style.display = "none";

    }
});


// login

function myFunction() {
    var userEmail = document.getElementById("login-email").value;
    var userPassword = document.getElementById("login-password").value;  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error: " + errorMessage)
  });

}




// Signup form
const signupform = document.querySelector('#signup-form')
signupform.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = signupform['signup-email'].value;
    const password = signupform['signup-password'].value;


    console.log(email, password)



    firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        // ...
    })
})