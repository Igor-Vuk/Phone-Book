var expect = require("expect");
var reducers = require("reducers");

describe("Reducers", () => {
    describe("searchTextReducer", () => {
        it("should set searchText", () => {
            var action = {
                type: "SET_SEARCH_TEXT",
                searchText: "Ivan"
            };
            var res = reducers.searchTextReducer("", action);

            expect(res).toEqual(action.searchText);
        });
    });

    describe("contactsReducer", () => {
        it("should add new contact", () => {
            var action = {
                type: "ADD_CONTACT",
                contact: {
                    firstName: "Goran",
                    lastName: "Čavić",
                    email: "grc@gmail.com",
                    phoneNumber: 3468876645
                } 
            };
            var res = reducers.contactsReducer([], action);

            expect(res.length).toEqual(1);
            expect(res[0].firstName).toEqual(action.contact.firstName);
            expect(res[0].lastName).toEqual(action.contact.lastName);
            expect(res[0].email).toEqual(action.contact.email);
            expect(res[0].phoneNumber).toEqual(action.contact.phoneNumber);
        });
    });
});