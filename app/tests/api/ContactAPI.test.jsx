var expect = require("expect");

var SearchContacts = require("SearchContacts");

describe ("SearchContacts", () => {
    beforeEach(() => {
        localStorage.removeItem("contacts");
    });

    it("should exist", () => {
        expect(SearchContacts).toExist();
    });

   

    describe("getContacts", () => {
        


        // dummy data for search text filter
        var contacts = [
            {
                id: 123243543667423,
                firstName: "Goran",
                lastName: "Žarko",
                email: "gzg@gmail.com",
                phoneNumber: 90823458
            }, {
                id: 123243543667423,
                firstName: "Mirko",
                lastName: "Sušek",
                email: "msk@gmail.com",
                phoneNumber: 56789458
            }
        ];


        it("should filter contacts by search text", () => {
            var filteredContacts = SearchContacts.filterContacts(contacts, "goran");
            expect(filteredContacts.length).toBe(1);
        });

        it("should return all contacts if searchText is empty", () => {
            var filteredContacts = SearchContacts.filterContacts(contacts, "");
            expect(filteredContacts.length).toBe(2);
        });
    });    
});