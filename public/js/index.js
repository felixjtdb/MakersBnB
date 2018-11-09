var el = document.getElementById('user')
var content;
var user = sessionStorage.getItem("username")
if (!user) {
  content = '<h1>not logged in!</h1>'
} else {
  content = `<h4>Logged in as ${user}!</h4>`
}
el.insertAdjacentHTML('afterbegin', content);
