var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var expect = require("expect");
var $ = require("jquery");

var ContactSearch = require("ContactSearch");

describe("ContactSearch", () => {
    it("should exist", () => {
        expect(ContactSearch).toExist();
    });

    it("should call onSearch with entered input text", () => {
        var searchText = "Maja";
        var spy = expect.createSpy();
        var contactSearch = TestUtils.renderIntoDocument(<ContactSearch onSearch={spy}/>);

        contactSearch.refs.searchText.value = searchText;
        TestUtils.Simulate.change(contactSearch.refs.searchText);
        expect(spy).toHaveBeenCalledWith("Maja");
    });
});