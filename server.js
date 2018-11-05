const app = require("express")()
const PORT = "8080"
const HOST = "127.0.0.1"

app.get('/', (req, res) => {
  res.write("hi")
  res.end()
});

app.get('/signup', (req, res) => {
  res.write("signup")
  res.end()
});

app.listen(PORT, () => {
  console.log("server up")
});
