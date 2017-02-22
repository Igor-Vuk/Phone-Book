var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var expect = require("expect");
var $ = require("jquery");

var Contact = require("Contact");

describe("Contact", () => {
    it("should exist", () => {
        expect(Contact).toExist();
    });
});