var React = require("react");
var ReactDOM = require("react-dom");
var {Provider} = require("react-redux");
var TestUtils = require("react-addons-test-utils");
var expect = require("expect");
var $ = require("jquery");

var configureStore = require("configureStore");
var ContactApp = require("ContactApp");
import ContactList from "ContactList";

describe("ContactApp", () => {
    it("should exist", () => {
        expect(ContactApp).toExist();
    });

    it("should render ContactList", () => {
        var store = configureStore.configure();
        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ContactApp/>
            </Provider>
        );

        var contactApp = TestUtils.scryRenderedComponentsWithType(provider, ContactApp)[0];
        var contactList = TestUtils.scryRenderedComponentsWithType(contactApp, ContactList);

        expect(contactList.length).toEqual(1);
    });
});