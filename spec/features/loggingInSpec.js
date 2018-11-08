var Browser = require("zombie")

Browser.localhost("localhost", 8080)

describe('Logging in', function() {
  console.log(1)
  var browser = new Browser();
  var server = require("../../server.js")

  it('should displays username after logging in', function(next) {
    browser.visit("http://localhost:8080/login")
    browser.fill('input[name="username"]', 'l_user')
    browser.fill('input[name="password"]', 'l_user')
    .pressButton('input[value="Login"]', function() {
      expect(browser.html("body")).toContain("Logged in as t_user")
      next()
    })
  });

});
