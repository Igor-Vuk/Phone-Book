var expect = require("expect");

var ContactAPI = require("ContactAPI");

describe ("ContactAPI", () => {
    beforeEach(() => {
        localStorage.removeItem("contacts");
    });

    it("should exist", () => {
        expect(ContactAPI).toExist();
    });

    describe("setContacts", () => {
        it("should set valid contacts array", () => {
            var contacts = [
                {
                    id: 123243543667423,
                    firstName: "Goran",
                    lastName: "Žarko",
                    email: "gzg@gmail.com",
                    phoneNumber: 90823458
                }
            ];
            ContactAPI.setContacts(contacts);

            var actualContacts = JSON.parse(localStorage.getItem("contacts")); 

            expect(actualContacts).toEqual(contacts);
        });

        it("should not set invalid todos array", () => {
            var badContacts = {a: "b"};
            ContactAPI.setContacts(badContacts);

            expect(localStorage.getItem("contacts")).toBe(null);
        });

    });

    describe("getContacts", () => {
        it ("should return empty array for bad localstorage data", () =>{
            var actualContacts = ContactAPI.getContacts();
            expect(actualContacts).toEqual([]);
        });

        it("should return contact if valid array in local storage", () => {
            var contacts = [
                {
                    id: 123243543667423,
                    firstName: "Goran",
                    lastName: "Žarko",
                    email: "gzg@gmail.com",
                    phoneNumber: 90823458
                }
            ];
            localStorage.setItem("contacts", JSON.stringify(contacts));

            var actualContacts = ContactAPI.getContacts();
            expect(actualContacts).toEqual(contacts);
        });


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
            var filteredContacts = ContactAPI.filterContacts(contacts, "goran");
            expect(filteredContacts.length).toBe(1);
        });

        it("should return all contacts if searchText is empty", () => {
            var filteredContacts = ContactAPI.filterContacts(contacts, "");
            expect(filteredContacts.length).toBe(2);
        });
    });    
});