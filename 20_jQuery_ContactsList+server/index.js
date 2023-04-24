"use strict";

const SELECTOR_FORM_ID = "#formId";
const SELECTOR_INPUT_ID = "#id";
const SELECTOR_INPUT_FIRSTNAME = "#firstName";
const SELECTOR_INPUT_LASTNAME = "#lastName";
const SELECTOR_INPUT_PHONE = "#phone";
const SELECTOR_TABLE_BODY = "#tableBody";
const CLASS_CONTACT_ITEM = "contactItem";
const CLASS_DELETE_BUTTON = "deleteButton";
const CLASS_EDIT_BUTTON = "editButton";

const $form = $(SELECTOR_FORM_ID);
const $tableBody = $(SELECTOR_TABLE_BODY);

let contactList = [];

$(window).on("load", onWindowLoad);
$form.on("submit", onFormSubmit);
$tableBody
    .on("click", `.${CLASS_DELETE_BUTTON}`, deleteContact)
    .on("click", `.${CLASS_EDIT_BUTTON}`, editContact);


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

function getContactData () {
    return {
        id: $form.find(SELECTOR_INPUT_ID).val(),
        firstName: $form.find(SELECTOR_INPUT_FIRSTNAME).val(),
        lastName: $form.find(SELECTOR_INPUT_LASTNAME).val(),
        phone: $form.find(SELECTOR_INPUT_PHONE).val(),
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
    const newContact = generateContactHtml(contact);
    $(`#${id}`).replaceWith(newContact);
}

function renderContact (contactData) {
    const htmlStr = generateContactHtml(contactData);
    
    $tableBody.append(htmlStr);
}

function renderContactList (list) {
    const htmlStr = list.map(generateContactHtml).join("");

    $tableBody.html(htmlStr);
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
    $form.trigger("reset");
}

function findContactElement (element) {
    return element.closest(`.${CLASS_CONTACT_ITEM}`);
}

function deleteContact (event) {
    const contactEl = findContactElement(event.target);
    ContactsApi
    .delete(contactEl.id)
        .then((deletedContact) => {
            const index = contactList.indexOf(deletedContact);
            contactList.splice(index, 1);
            contactEl.remove();
            clearForm();
        })
        .catch(error => showError(error))
}

function editContact (event) {
    const contactEl = findContactElement(event.target);
    const contact = findContactById(contactEl.id);

    fillForm(contact);
}

function findContactById (id) {
    return  contactList.find(contact => contact.id === id)
}

function fillForm (contact) {
    $form.find(SELECTOR_INPUT_ID).val(contact.id);
    $form.find(SELECTOR_INPUT_FIRSTNAME).val(contact.firstName);
    $form.find(SELECTOR_INPUT_LASTNAME).val(contact.lastName);
    $form.find(SELECTOR_INPUT_PHONE).val(contact.phone);
}