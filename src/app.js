const login = document.getElementById('login');
const logout = document.getElementById('logout');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const btnRegister = document.getElementById('btnRegister')
const btnLogin = document.getElementById('btnLogin')
const btnLogout = document.getElementById('btnLogout')
const btnFacebook = document.getElementById('btnFacebook');
const btnGoogle = document.getElementById('btnGoogle');


window.onload = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('Usuario Logueado');
      login.classList.add("hiden");
      logout.classList.remove("hiden");
      username.innerHTML = `Bienvenida ${user.displayName}`;
    } else {
      console.log('Sin usuario');
      login.classList.remove("hiden");
      logout.classList.add("hiden");
    }
  });
}

btnRegister.addEventListener('click', () => {
  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then(() => {
    console.log('Usuario Creado');
  })
  .catch(function(error) {
    console.log(error.code ,' : ' , error.message);
  });
})


btnLogin.addEventListener('click', () => {
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then (() => {
    console.log('Verificado')
  })
  .catch(function(error) {
    console.log('Contraseña Incorrecta')
  });
})

btnLogout.addEventListener('click', () => {
  firebase.auth().signOut().then(function() {
    console.log('Cerró Sesión');
  }).catch(function(error) {
    console.log('Error al cerrar Sesión');
  });
})

btnFacebook.addEventListener('click', () => {
  var provider = new firebase.auth.FacebookAuthProvider();
  provider.setCustomParameters({
    'display' : 'popup'
  });
  firebase.auth().signInWithPopup(provider)
    .then(function(result) { console.log('Logueado con Fb')})
    .catch(function(error) {
      console.log(error.code);
      console.log(error.message);
      console.log(error.email);
      console.log(error.credential);
  });
})

btnGoogle.addEventListener('click',() => {
  var provider = new firebase.auth.GoogleAuthProvider();

  //provider.setCustomParameters({
  //  'login_hint': 'user@example.com'
  //});

  firebase.auth().signInWithPopup(provider)
    .then(function(result) { console.log('Login Google') })
    .catch(function(error) {
      console.log(error.code);
      console.log(error.message);
      console.log(error.email);
      console.log(error.credential);
  });

});