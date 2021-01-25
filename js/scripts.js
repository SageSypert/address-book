
function AddressBook() {
  this.contacts = {};
  this.currentId = 0;
}
AddressBook.prototype.addContact = function(contact) {
  this.contacts[contact.firstName] = contact;
}

function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

let contact1 = new Contact("Bob", "Boberson", "400-400-4000");

console.log(contact1);

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}



// // Business Logic for AddressBook ---------
// function AddressBook() {
//   this.contacts = {};
//   this.currentId = 0;
// }

// AddressBook.prototype.addContact = function(contact) {
//   contact.id = this.assignId();
//   this.contacts[contact.id] = contact;
// }

// AddressBook.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// }

// AddressBook.prototype.findContact = function(id) {
//   if (this.contacts[id] != undefined) {
//     return this.contacts[id];
//   }
//   return false;
// }

// AddressBook.prototype.deleteContact = function(id) {
//   if (this.contacts[id] === undefined) {
//     return false;
//   }
//   delete this.contacts[id];
//   return true;
// }

// // Business Logic for Contacts ---------
// function Contact(firstName, lastName, phoneNumber) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.phoneNumber = phoneNumber;
// }

// Contact.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;
// }