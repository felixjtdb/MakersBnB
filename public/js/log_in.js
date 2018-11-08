
function logIn() {
  var data = {
    username: document.querySelector('#username').value,
    password: document.querySelector('#password').value
  }
  fetch('/login_user', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {"Content-Type": "application/json"},
  })
  .then(function(res) {
    return res.json()
  })
  .then(function (res) {
    sessionStorage.setItem("username", res.users[0].username )
    window.location.href = '/'
  }).catch(function() {
    alert("Incorrect username/password")
  })
}
