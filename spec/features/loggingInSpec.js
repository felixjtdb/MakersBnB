var Browser = require("zombie")

Browser.localhost("localhost", 8080)

describe('Logging in', function() {
  var browser = new Browser();
  var server = require("../../server.js")

  beforeEach(function(done) {
    browser.visit('/')
    browser.clickLink('#nav-link-login')

    browser
      .fill('#username', 't_user')
      .fill('#password', 'qwerty')

    return browser.pressButton('#login', done);
  });

  it('should displays username after logging in', function() {
    browser.assert.text("h4", "Logged in as t_user")
  });

});
