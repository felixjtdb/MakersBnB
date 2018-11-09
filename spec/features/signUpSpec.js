process.env.NODE_ENV = 'test'
var Browser = require("zombie")
var DB = require('../../db/db_helper')
var clear = DB.clearUserTable()

Browser.localhost("localhost", 8080)


describe('Signing up', function() {
  var browser = new Browser();
  var server = require("../../server.js")

  beforeEach(function(next) {
    browser.visit('http://localhost:8080/', function (err) {
      browser.clickLink('#nav-link-signup', function (err) {
        next()
      })
    })
  })

  it('should see a form', function(next) {
    expect(browser.success).toBe(true);
    expect(browser.fill("#name")).toBeDefined();
    expect(browser.fill("#username")).toBeDefined();
    expect(browser.fill("#password")).toBeDefined();
    expect(browser.fill("#email")).toBeDefined();
    next()
  });

  it('should be able to fill in form', function(next) {
    browser.fill("#name", "0")
    browser.fill("#username", "dfg")
    browser.fill("#password", "3gasfdvg")
    browser.fill("#email", "4demail@emasagil.com")
    browser.clickLink("#sign-up", function (res) {
      expect(browser.text('h4')).toContain('Property Listings');
      next()
    })
  });

  it('should throw an error if form filled incorrectly', function(next) {
  browser.fill("#name", "lol")
  browser.fill("#username", "t_user")
  browser.fill("#email", "lol")
  browser.fill("#password", "lol")
  browser.clickLink("#sign-up", function (res) {
    expect(browser.redirected).toBe(false)
    next()
  })
});
});
