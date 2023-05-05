const SELECTOR_FORM = "#form";
const SELECTOR_MSG_CONTAINER = "#messageContainer";

const form = document.querySelector(SELECTOR_FORM);
const messageContainer = document.querySelector(SELECTOR_MSG_CONTAINER);

const chatSocket = new ChatSocket({onMessage, onError});

form.addEventListener("submit", onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();

    const formData = getFormData();

    chatSocket.send(formData);
}

function onMessage (event) {
    let data = JSON.parse(event.data);
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

function generateTemplateHtml (data) {
    return `
        <li>${data.name}: ${data.message}</li>
    `;
}

function clearForm () {
    form.reset();
}