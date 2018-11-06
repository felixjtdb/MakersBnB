var Browser = require("zombie");

Browser.localhost("localhost", 8080);

describe("User can visit homepage", function() {
 var browser = new Browser();
 var server = require("../server.js")

  beforeEach(function(done) {
    browser.visit('/', done)
  });

   it("should be successful", function() {
     browser.assert.success();
   });

   it("should show homepage", function() {
     browser.assert.text("h1", "Welcome to Makers BnB!")
   });
});
