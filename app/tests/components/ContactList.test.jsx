var React = require("react");
var ReactDOM = require("react-dom");
var {Provider} = require("react-redux");
var TestUtils = require("react-addons-test-utils");
var expect = require("expect");
var $ = require("jquery");

import {configure} from "configureStore";
import ConnectedContactList, {ContactList} from "ContactList";
import ConnectedContact, {Contact} from "Contact";

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
        var store = configure({
            contacts
        });
        var provider = TestUtils.renderIntoDocument (
            <Provider store={store}>
                <ConnectedContactList/>
            </Provider>
        );
        var contactList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedContactList)[0]; 
        var contactsComponents = TestUtils.scryRenderedComponentsWithType(contactList, ConnectedContact);

        expect(contactsComponents.length).toBe(contacts.length);
    });

    it("should render 'Currently no contacts message' if no contacts", () =>{
        var contacts = [];
        var contactList = TestUtils.renderIntoDocument(<ContactList  contacts={contacts}/>);
        var $el = $(ReactDOM.findDOMNode(contactList));

        expect($el.find(".container__message").length).toBe(1)
    });
});