const fs = require("fs/promises");
const contactsPath = require("./db");

// get and return list of all contacts from database
const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath);
  return contacts;
};

// find and return defined contact (by ID of this contact)
const getContactById = async (contactId) => {
  // ...твій код
};

// delete contact (by ID of this contact) and return it
const removeContact = async (contactId) => {
  // ...твій код
};

// add new contact in database and return it after adding
const addContact = async (name, email, phone) => {
  // ...твій код
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
