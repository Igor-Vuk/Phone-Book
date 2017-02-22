var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var expect = require("expect");
var $ = require("jquery");

var ContactList = require("ContactList");
var Contact = require("Contact");

describe("ContactList", () => {
    it("should exist", () => {
        expect(ContactList).toExist();
    });

    it("should render one Contact component for each Contact item", () =>{
        var contacts = [
            {
                id: 1,
                name: "Igor",
                lastName: "Vukelic",
                email: "igvukelic@gmail.com",
                phoneNumber: 234545643
            }, {
                id: 2,
                name: "Zrinka",
                lastName: "Berdin",
                email: "zrinkff@gmail.com",
                phoneNumber: 56456456
            }
        ];
        var contactList = TestUtils.renderIntoDocument(<ContactList  contacts={contacts}/>);
        // select all Contact components inside contactList
        var contactsComponents = TestUtils.scryRenderedComponentsWithType(contactList, Contact);

        expect(contactsComponents.length).toBe(contacts.length);
    });
});