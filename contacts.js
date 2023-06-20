const fs = require('fs/promises');
const path = require('path');
// const uuidv4 = require("uuid");

const contactsPath = path.join(__dirname, 'db/contacts.json');

const listContacts = async() => {
     const data = await fs.readFile(contactsPath, "utf-8");
     return JSON.parse(data);
}

const getContactById = async(contactId) => {

}

const removeContact = async(contactId) => {

}

const addContact = async(name, email, phone) => {
    const contacts = await JSON.parse(await fs.readFile(contactsPath));
    const newContact = {
        id: Date.now().toString(),
        name,
        email,
        phone,
      };
    contacts.push(newContact);
   
    const data = await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));;
    return data;

}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,

}