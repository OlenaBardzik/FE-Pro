"use strict";

const addButton = document.querySelector("#addButton");
const nameInput = document.querySelector("#nameInput");
const surnameInput = document.querySelector("#surnameInput");
const phoneInput = document.querySelector("#phoneInput");
const tableBody = document.querySelector("#tableBody");

addButton.addEventListener("click", onButtonClick);


function onButtonClick () {
    const contactData = getContactData();

    if (!isStringValid(contactData.name) || 
        !isStringValid(contactData.surname) || 
        !isNumberValid(contactData.phone)
    ) {
        showError();
        return;
    }
       
    renderContact(contactData);
    clearForm();
}


function getContactData () {
    return {
        name: nameInput.value,
        surname: surnameInput.value,
        phone: phoneInput.value,
    };
}

function isStringValid (str) {
    return str.trim().length !== 0;
}

function isNumberValid (num) {
   return num.trim().length !== 0 && !isNaN(num);
}

function showError () {
    alert("The data is not valid");
}

function renderContact (contactData) {
    const htmlStr = `
        <tr>
            <td>${contactData.name}</td>
            <td>${contactData.surname}</td>
            <td>${contactData.phone}</td>
        </tr>
        `;
    tableBody.insertAdjacentHTML('beforeend', htmlStr);
    
}

function clearForm () {
    nameInput.value = "";
    surnameInput.value = "";
    phoneInput.value = "";
}