process.env.NODE_ENV = 'test'
var Browser = require("zombie")

Browser.localhost("localhost", 8080)

describe('Viewing a listing', function() {
  var browser = new Browser();
  var server = require("../../server.js")

  beforeEach(function(next) {
    browser.visit('http://localhost:8080/', function () {
      browser.clickLink('Room to rent in Barcelona!', function () {
        next()
      })
    })
  });

  it('shows link to each listing on homepage ', function(next) {
    expect(browser.success).toBe(true);
    next()
  });

  it('shows listing information about property', function(next) {
    expect(browser.text("h1")).toContain('Room to rent in Barcelona!')
    expect(browser.text("p")).toContain('A description for a room to rent in Barcelona!')
    expect(browser.text("ul")).toContain("Barcelona")
    expect(browser.text("ul")).toContain("1 bedrooms")
    expect(browser.text("ul")).toContain("Single Room")
    expect(browser.text("ul")).toContain("£99.99")
    expect(browser.text("p")).toContain("For more information, contact test user at test@user.com")
    next()
  });



});
