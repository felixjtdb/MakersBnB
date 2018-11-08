var Browser = require("zombie")

Browser.localhost("localhost", 8080)

describe('Logging in', function() {
  console.log(1)
  var browser = new Browser();
  var server = require("../../server.js")

  it('should see a form', function(next) {
    browser.visit('http://localhost:8080/', function (err) {
      browser.clickLink('#nav-link-login', function (err) {
        expect(browser.success).toBe(true);
        expect(browser.fill("#username")).toBeDefined();
        expect(browser.fill("#password")).toBeDefined();
        next()
      })
    })
  });

  it('should be able to fill in form', function(next) {
    browser.fill("#username", "t_user")
    browser.fill("#password", "qwerty")
    browser.clickLink("#login", function (res) {
      expect(browser.text('h4')).toContain('Logged in as t_user');
      next()
    })
  });

});
