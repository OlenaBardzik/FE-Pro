"use strict";

const SELECTOR_FORM_ID = "#formId";
const SELECTOR_TABLE_BODY = "#tableBody";
const CLASS_CONTACT_ITEM = "contactItem"
const CLASS_DELETE_BUTTON = "deleteButton";
const CLASS_EDIT_BUTTON = "editButton";

const form = document.querySelector(SELECTOR_FORM_ID);
const tableBody = document.querySelector(SELECTOR_TABLE_BODY);

let contactList = [];

window.addEventListener("load", onWindowLoad);
form.addEventListener("submit", onFormSubmit);
tableBody.addEventListener("click", onTableBodyClick);


function onWindowLoad () {
    ContactsApi
        .getContactList()
        .then((list) => {
            contactList = list;
            renderContactList(list);
        })
        .catch(error => showError(error));
}

function onFormSubmit (event) {
    event.preventDefault();
    
    const contactData = getContactData();

    if (!isContactValid(contactData)) {
        showError("The data is not valid");
        return;
    }
    
    if (contactData.id) {
        ContactsApi
            .update(contactData.id, contactData) 
            .then((newContact) => {
                contactList = contactList.map(contactItem => contactItem.id === contactData.id ? newContact : contactItem);
                replaceContact(contactData.id, newContact);
                clearForm();
            })
            .catch(error => showError(error));
    } else {
        ContactsApi
            .create(contactData)
            .then((newContact) => {
                contactList.push(newContact);
                renderContact(newContact);
                clearForm();
            })
            .catch(error => showError(error));
    }
}

function onTableBodyClick (event) {
    const target = event.target;
    const contactEl = findContactElement(target);

    if (!contactEl) {
        return;
    }
    if (isDeleteBtn(target)) {
        deleteContact(contactEl);
        return;
    }
    if (isEditBtn(target)) {
        editContact(contactEl);
        return;
    }
}

function getContactData () {
    return {
        id: form.id.value,
        firstName: form.nameInput.value,
        lastName: form.surnameInput.value,
        phone: form.phoneInput.value,
    };
}

function isStringValid (str) {
    return str.trim().length !== 0;
}

function isNumberValid (num) {
   return num.trim().length !== 0 && !isNaN(num);
}

function isContactValid (contactData) {
    return isStringValid(contactData.firstName) && 
        isStringValid(contactData.lastName) && 
        isNumberValid(contactData.phone)
}

function showError (error) {
    alert(error);
}

function replaceContact (id, contact) {
    const previousContact = document.querySelector(`[id="${id}"]`);
    const newContact = generateContactHtml(contact);

    previousContact.outerHTML = newContact;
}

function renderContact (contactData) {
    const htmlStr = generateContactHtml(contactData);
    
    tableBody.insertAdjacentHTML('beforeend', htmlStr);
}

function renderContactList (list) {
    const htmlStr = list.map(generateContactHtml).join("");

    tableBody.innerHTML = htmlStr;
}

function generateContactHtml (contactData) {
    return `
        <tr id="${contactData.id}" class=${CLASS_CONTACT_ITEM}>
            <td>${contactData.firstName}</td>
            <td>${contactData.lastName}</td>
            <td>${contactData.phone}</td>
            <td>
                <button class=${CLASS_EDIT_BUTTON}>Edit</button>
                <button class=${CLASS_DELETE_BUTTON}>Delete</button>
            </td>
        </tr>
        `;
}

function clearForm () {
    form.reset();
}

function findContactElement (element) {
    return element.closest(`.${CLASS_CONTACT_ITEM}`)
}

function isDeleteBtn (element) {
    return element.classList.contains(CLASS_DELETE_BUTTON);
}

function isEditBtn (element) {
    return element.classList.contains(CLASS_EDIT_BUTTON);
}

function deleteContact (contact) {
    ContactsApi
    .delete(contact.id)
        .then((deletedContact) => {
            const index = contactList.indexOf(deletedContact);
            contactList.splice(index, 1);
            contact.remove();
            clearForm();
        })
        .catch(error => showError(error))
}

function editContact (element) {
    const id = element.id;
    const contact = findContactById(id);

    fillForm(contact);
}

function findContactById (id) {
    return  contactList.find(contact => contact.id === id)
}

function fillForm (contact) {
    form.id.value = contact.id;
    form.nameInput.value = contact.firstName;
    form.surnameInput.value = contact.lastName;
    form.phoneInput.value = contact.phone;
}