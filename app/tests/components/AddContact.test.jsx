var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var expect = require("expect");
var $ = require("jquery");

var {AddContact} = require("AddContact");

describe("AddContact", () => {
    it("should exist", () => {
        expect(AddContact).toExist();
    });

    it("should dispatch ADD_CONTACT when valid contact text", () => {
        var contactText = {
            firstName:"Dino",
            lastName:"Horvat",
            email:"drv@gmail.com",
            phoneNumber: 56456456
        };

        var action = {
            type: "ADD_CONTACT",
            firstName: contactText.firstName,
            lastName: contactText.lastName,
            email: contactText.email,
            phoneNumber: contactText.phoneNumber
        };

        var spy = expect.createSpy();
        var addContact = TestUtils.renderIntoDocument(<AddContact dispatch = {spy}/>);
        var $el = $(ReactDOM.findDOMNode(addContact));

        addContact.refs.firstName.value = "Dino";
        addContact.refs.lastName.value = "Horvat";
        addContact.refs.email.value = "drv@gmail.com";
        addContact.refs.phoneNumber.value = 56456456;

        TestUtils.Simulate.submit($el.find("form")[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it("should not dispatch ADD_CONTACT when invalid contact text", () => {
        var spy = expect.createSpy();
        var addContact = TestUtils.renderIntoDocument(<AddContact dispatch = {spy}/>);
        var $el = $(ReactDOM.findDOMNode(addContact));

        addContact.refs.firstName.value = "";
        addContact.refs.lastName.value = "Horvat";
        addContact.refs.email.value = "drv@gmail.com";
        addContact.refs.phoneNumber.value = 56456456;

        var contactText = {
            firstName: "",
            lastName:"Horvat",
            email:"drv@gmail.com",
            phoneNumber: 56456456
        };


        TestUtils.Simulate.submit($el.find("form")[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});

