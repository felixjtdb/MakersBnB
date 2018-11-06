var Browser = require("zombie");

Browser.localhost("localhost", 8080);

describe("User can visit homepage", function() {
 var browser = new Browser();
 var server = require("../../server.js")

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

describe("User can leave homepage", function() {
 var browser = new Browser();
 var server = require("../../server.js")

  beforeEach(function(done) {
    return browser.visit('/', done);

  });

   it("has a functioning sign up button", function() {
       return browser.pressButton('Sign Up', function(browser) {
       });
      browser.assert.text("h2", "Sign up to start Listing on MakersBnB");
   });

   it("has a functioning log in button", function() {
       return browser.pressButton('Log In', function(browser) {
       });
      browser.assert.text("h2", "Log In to start Listing on MakersBnB");
   });

});
