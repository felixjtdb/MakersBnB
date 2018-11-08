var Browser = require("zombie")

Browser.localhost("localhost", 8080)

describe('Logging out', function() {
  var browser = new Browser();
  var server = require("../../server.js")

  it('should log out a user', function(next) {
    browser.visit('http://localhost:8080/', function (err) {
      browser.clickLink('#nav-link-login', function (err) {
        browser.fill("#username", "t_user")
        browser.fill("#password", "qwerty")
        browser.clickLink("#login", function (res) {
          browser.clickLink('#nav-link-logout', function (err) {
            expect(browser.text('h4')).toContain('not logged in!');
            next()
        });
      });
    });
  });
});
});
