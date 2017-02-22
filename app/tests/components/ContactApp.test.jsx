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

    it("should add contact to the contacts state on handleAddContact", ()=> {
        var contactText = {
            firstName: "Ivan",
            lastName: "Hrlek",
            email: "hrln@gmail.com",
            phoneNumber: 975568845
        };
        var contactApp = TestUtils.renderIntoDocument(<ContactApp/>);
        contactApp.setState({
            contacts: []
        });
        contactApp.handleAddContact(contactText);

        expect(contactApp.state.contacts[0].firstName).toBe("Ivan");
        expect(contactApp.state.contacts[0].lastName).toBe("Hrlek");
        expect(contactApp.state.contacts[0].email).toBe("hrln@gmail.com");
        expect(contactApp.state.contacts[0].phoneNumber).toBe(975568845);
    });
});