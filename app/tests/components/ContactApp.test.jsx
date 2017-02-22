var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var expect = require("expect");
var $ = require("jquery");

var ContactApp = require("ContactApp");

describe("ContactApp", () => {
    it("should exist", () => {
        expect(ContactApp).toExist();
    });
});