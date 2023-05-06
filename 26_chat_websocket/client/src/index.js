import "./style.css";
import { ChatSocket } from "./ChatSocket";

const SELECTOR_FORM = "#form";
const SELECTOR_MSG_CONTAINER = "#messageContainer";

const form = document.querySelector(SELECTOR_FORM);
const messageContainer = document.querySelector(SELECTOR_MSG_CONTAINER);

const chatSocket = new ChatSocket({onMessage, onError});

form.addEventListener("submit", onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();

    const formData = getFormData();

    if (isDataValid(formData)) {
        chatSocket.send(formData);
    }
}

function onMessage (data) {
    messageContainer.insertAdjacentHTML("beforeend", generateTemplateHtml(data));
    clearForm();
}

function onError (error) {
    alert(`Error: ${error}`);
}

function getFormData () {
    return {
        name: form.userName.value,
        message: form.message.value
    }
}

function isDataValid(formData) {
    return formData.name.trim().length !== 0 && formData.message.trim().length !== 0
}

function generateTemplateHtml (data) {
    return `
        <li>${data.name}: ${data.message}</li>
    `;
}

function clearForm () {
    form.reset();
}