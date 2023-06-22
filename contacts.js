const fs = require('node:fs/promises');
const path = require('path');

const contactsPath = path.join(__dirname, 'db/contacts.json');

const listContacts = async() => {
     return JSON.parse(await fs.readFile(contactsPath, "utf-8"));
}

const getContactById = async(contactId) => {
    const contacts = await JSON.parse(await fs.readFile(contactsPath));
    const findContact = contacts.find((contact) => contact.id === contactId);
    if (findContact) {
        return findContact;
    } 
    return null;
}

const removeContact = async(contactId) => {
    const contacts = await JSON.parse(await fs.readFile(contactsPath));
    const findContact = contacts.find((contact) => contact.id === contactId);
    console.log(findContact);
    console.log(contacts);
    // contacts.slice()
    // !!!!

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
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return newContact;

}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
}