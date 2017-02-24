var expect = require("expect");
var actions = require("actions");

describe ("Actions", () => {

    it("should generate add contacts action object", () => {
        var contacts = [{
            id: 11,
            firstName: "Kruno",
            lastName: "Karlic",
            email: "krk@gmail.com",
            phoneNumber: 234553455
        }];

        var action = {
            type: "ADD_CONTACTS",
            contacts
        };
        var res = actions.addContacts(contacts);
        expect(res).toEqual(action);
    });

    it("should generate search text action", () => {
        var action = {
            type: "SET_SEARCH_TEXT",
            searchText: "Some search text"
        };
        var res = actions.setSearchText(action.searchText);

        expect(res).toEqual(action);
    });
});