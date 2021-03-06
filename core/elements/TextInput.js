/**
 * Created by mikalai.mauchanenka on 04.11.2015.
 */
var BaseElement = require('./BaseElement.js');

var TextInput = function (locator, description) {
    BaseElement.apply(this, arguments);
};

TextInput.prototype = Object.create(BaseElement.prototype);
TextInput.prototype.constructor = TextInput;

TextInput.prototype.typeText = function(text) {
    var descr = this.elementDescription;
    this.webElement.sendKeys(text).then(function() {
        logger.info("TextInput '%s' :: type text: '%s'", descr, text);
    });
};

TextInput.prototype.clear = function() {
    var descr = this.elementDescription;
    this.webElement.clear().then(function() {
        logger.info("TextInput '%s' :: cleared", descr);
    });
};

TextInput.prototype.clearAndTypeText = function(text) {
    var descr = this.elementDescription;
    this.webElement.clear();
    this.webElement.sendKeys(text).then(function() {
        logger.info("TextInput '%s' :: type text: '%s'", descr, text);
    });
};

module.exports = TextInput;