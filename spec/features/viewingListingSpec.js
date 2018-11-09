process.env.NODE_ENV = 'test'
var Browser = require("zombie")

Browser.localhost("localhost", 8080)

describe('Viewing a listing', function() {
  var browser = new Browser();
  var server = require("../../server.js")
  
  it('shows link to each listing on homepage ', function(next) {
    browser.visit('http://localhost:8080/', function () {
      browser.clickLink('Room to rent in Barcelona!', function () {
        expect(browser.success).toBe(true);
        next()
      })
    })
  });



});
