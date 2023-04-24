"use strict";

const inputUsername = document.querySelector("#inputUsername");
const btnGetUser = document.querySelector("#btnGetUsername");
const userContent = document.querySelector("#userContent");

btnGetUser.addEventListener("click", onbtnGetUserClick);

function onbtnGetUserClick() {
    const userData = getUserData();
    loadUser(userData)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
        .then((data) => {
            renderUser(data);
        })
        .catch((error) => {
            renderError(error);
        })
}

function getUserData() {
    return {
        login: inputUsername.value
    }
}

function loadUser(userData) {
    return fetch(`https://api.github.com/users/${userData.login}`)
}

function renderUser(user) {
    const html = generateUserHtml(user);

    userContent.innerHTML = html;
}

function generateUserHtml(user) {
    return `
        <img src="${user.avatar_url}" alt="user avatar">
        <p>Public repos: ${user.public_repos}</p>
        <p>Followers: ${user.followers}</p>
        <p>Following: ${user.following}</p>
        `
}

function renderError(error) {
    const errorHtml = generateErrorHtml(error);

    userContent.innerHTML = errorHtml;
}

function generateErrorHtml(error) {
    return `
        <p>${error}</p>
        `
}