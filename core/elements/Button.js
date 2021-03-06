var BaseElement = require('./BaseElement.js'),
    CustomError = require('../exceptions/CustomError.js');

var Button = function (locator, description) {
    BaseElement.apply(this, arguments);
};

Button.prototype = Object.create(BaseElement.prototype);
Button.prototype.constructor = Button;

Button.prototype.click = function() {
    var descr = this.elementDescription;
    return this.webElement.click().then(function() {
        logger.info("Button '%s' :: click", descr);
    }, function(err){
        throw new CustomError("Error while click on '%s' button: %s", descr, err.message);
    })
};

module.exports = Button;