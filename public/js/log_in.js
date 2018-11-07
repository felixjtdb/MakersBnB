
function logIn() {
  var data = {
    username: 't_user',
    password: 'qwerty'
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
    // document.getElementById('user').innerHTML = res.users[0].username
    sessionStorage.setItem("username", res.users[0].username )
    window.location.href = '/'
  })
}
