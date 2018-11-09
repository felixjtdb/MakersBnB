process.env.NODE_ENV = 'test'
var Browser = require("zombie")

Browser.localhost("localhost", 8080)

describe('New Listing', function() {
  var browser = new Browser();
  var server = require("../../server.js")

  beforeEach(function(next) {
    browser.visit('http://localhost:8080/', function (err) {
      browser.clickLink('#nav-link-new-listing', function (err) {
        next()
      })
    })
  })

  it('should see a form', function(next) {
    expect(browser.success).toBe(true);
    expect(browser.fill("#name")).toBeDefined();
    expect(browser.fill("#location")).toBeDefined();
    expect(browser.fill("#price")).toBeDefined();
    expect(browser.fill("#type")).toBeDefined();
    expect(browser.fill("#bedrooms")).toBeDefined();
    expect(browser.fill("#description")).toBeDefined();
    next()
  });

  it('should be able to fill in form', function(next) {
    browser.fill("#name", "Chateau for rent in Geneva")
    browser.fill("#location", "Switzerland")
    browser.fill("#price", "10")
    browser.fill("#type", "House")
    browser.fill("#bedrooms", "52")
    browser.fill("#description", "description for a chateau in Geneva")
    browser.clickLink("#new-listing", function (res) {
      expect(browser.text('h1')).toContain('Chateau for rent in Geneva');
      next()
    })
  });
});
