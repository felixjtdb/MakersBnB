process.env.NODE_ENV = 'test'
var Browser = require("zombie")

Browser.localhost("localhost", 8080)

describe('Logging in', function() {
  var browser = new Browser();
  var server = require("../../server.js")

  it('should see a listing', function(next) {
    browser.visit('http://localhost:8080/', function (err) {
      expect(browser.text('h6')).toContain('Room to rent in Barcelona!');
      next()
    })
  })
});
