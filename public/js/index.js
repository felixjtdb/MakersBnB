var el = document.getElementById('content')
var content;
var user = sessionStorage.getItem("username")

if (!user) {
  content = '<h4>not logged in!</h4>'
} else {
  content = `<h4>Logged in as ${user}!</h4>`
}
el.insertAdjacentHTML('afterbegin', content);
