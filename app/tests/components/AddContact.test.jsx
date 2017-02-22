var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var expect = require("expect");
var $ = require("jquery");

var AddContact = require("AddContact");

describe("AddContact", () => {
    it("should exist", () => {
        expect(AddContact).toExist();
    });

    it("should call onAddContact prop with valid data", () => {
        var spy = expect.createSpy();
        var addContact = TestUtils.renderIntoDocument(<AddContact onAddContact = {spy}/>);
        var $el = $(ReactDOM.findDOMNode(addContact));

        addContact.refs.firstName.value = "Dino";
        addContact.refs.lastName.value = "Horvat";
        addContact.refs.email.value = "drv@gmail.com";
        addContact.refs.phoneNumber.value = 56456456;

        var contactText = {
            firstName:"Dino",
            lastName:"Horvat",
            email:"drv@gmail.com",
            phoneNumber: 56456456
        };


        TestUtils.Simulate.submit($el.find("form")[0]);

        expect(spy).toHaveBeenCalledWith(contactText);
    });

    it("should not call onAddContact prop when invalid input", () => {
        var spy = expect.createSpy();
        var addContact = TestUtils.renderIntoDocument(<AddContact onAddContact = {spy}/>);
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

