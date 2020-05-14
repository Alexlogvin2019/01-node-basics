const fs = require("fs");
const path = require("path");

/*
//  * Раскомментируй и запиши значение
 */
const contactsPath = path.join(__dirname, "./db/contacts.json");

// TODO: задокументировать каждую функцию
function listContacts() {
  fs.readFile("./db/contacts.json", "utf-8", function (err, content) {
    try {
      const parsedContent = JSON.parse(content);
      console.table(parsedContent);
    } catch (error) {
      console.log("listContacts error", err);
    }
  });
}
function getContactById(contactId) {
  fs.readFile("./db/contacts.json", "utf-8", function (err, content) {
    try {
      const parsedContent = JSON.parse(content);
      const findContact = parsedContent.find((item) => item.id === contactId);
      console.log("findContact", findContact);
    } catch (error) {
      console.log("getContactById error", err);
    }
  });
}

function removeContact(contactId) {
  fs.readFile("./db/contacts.json", "utf-8", function (err, content) {
    try {
      const parsedContent = JSON.parse(content);
      const deleteContact = parsedContent.filter(
        (item) => item.id != contactId
      );
      const newContacts = JSON.stringify(deleteContact);
      fs.writeFile(contactsPath, newContacts, () => {
        console.log("remove contact");
      });
      console.table(deleteContact);
    } catch (error) {
      console.log("removeContact error", err);
    }
  });
}

function addContact(name, email, phone) {
  fs.readFile("./db/contacts.json", "utf-8", function (err, content) {
    try {
      const parsedContent = JSON.parse(content);
      const newContact = { id: 1, name, email, phone };
      const addContactt = [newContact, ...parsedContent];
      fs.writeFile(contactsPath, JSON.stringify(addContactt), () => {
        console.log("Contact added");
      });
      console.table(addContactt);
    } catch (error) {
      console.log("addContact error", err);
    }
  });
}

module.exports = {
  contactsPath,
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
