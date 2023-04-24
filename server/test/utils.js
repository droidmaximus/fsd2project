var responseValidator = function(expectedStatusCode, validateFunction) {
    return{
        json: function (statusCode,data) {
            statusCode.should.equal(expectedStatusCode);
            validationFunction(data);
        },
        send: function (statusCode,data) {
            statusCode.should.equal(expectedStatusCode);
            validationFunction(data);
        }
    }
}

module.exports = {
    responseValidator
};
