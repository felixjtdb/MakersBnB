process.env.NODE_ENV = 'test'
var Browser = require("zombie")

Browser.localhost("localhost", 8080)

describe('Logging in', function() {
  var browser = new Browser();
  var server = require("../../server.js")

  beforeEach(function(next) {
    browser.visit('http://localhost:8080/', function (err) {
      browser.clickLink('#nav-link-login', function (err) {
        next()
      })
    })
  })

  it('should see a form', function(next) {
    expect(browser.success).toBe(true);
    expect(browser.fill("#login_username")).toBeDefined();
    expect(browser.fill("#login_password")).toBeDefined();
    next()
  });

  it('should be able to fill in form', function(next) {
    browser.fill("#login_username", "t_user")
    browser.fill("#login_password", "qwerty")
    browser.clickLink("#login", function (res) {
      expect(browser.text('h4')).toContain('Property Listings');
      next()
    })
  });

  it('should throw an error if form filled incorrectly', function(next) {
  browser.fill("#login_username", "not_a_user")
  browser.fill("#login_password", "lol")
  browser.clickLink("#login", function (res) {
    expect(browser.redirected).toBe(false)
    next()
  })
});

});
