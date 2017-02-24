var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var expect = require("expect");
var $ = require("jquery");

import {ContactSearch} from "ContactSearch";

describe("ContactSearch", () => {
    it("should exist", () => {
        expect(ContactSearch).toExist();
    });

    it("should dispatch SET_SEARCH_TEXT on input change", () => {
        var searchText = "Maja";
        var action = {
            type: "SET_SEARCH_TEXT",
            searchText
        };
        var spy = expect.createSpy();
        var contactSearch = TestUtils.renderIntoDocument(<ContactSearch dispatch={spy}/>);

        contactSearch.refs.searchText.value = searchText;
        TestUtils.Simulate.change(contactSearch.refs.searchText);
        expect(spy).toHaveBeenCalledWith(action);
    });
});