
function logIn(data) {
  fetch('/login_user', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {"Content-Type": "application/json"},
  })
  .then(function(res) {
    return res.json()
  })
  .then(function (res) {
    console.log(res)
    sessionStorage.setItem("username", res.users[0].username )
    window.location.href = '/'
  }).catch(function() {
    alert("Incorrect username/password")
  })
}

function clearsession() {
  sessionStorage.clear()
}

function signUp(data) {
  fetch('/signup', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {"Content-Type": "application/json"},
  })
  .then(function(res) {
    return res.json()
  })
  .then(function(res) {
    sessionStorage.setItem("username", res.user.username)
    window.location.href = '/'
  })
  .catch(function() {
    alert("Invalid details, username or email possibly in use")
  })
}
