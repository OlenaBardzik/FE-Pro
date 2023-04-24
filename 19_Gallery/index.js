"use strict";

const SELECTOR_ALBUM_LIST = "#albumList";
const SELECTOR_PHOTOS_CONTAINER = "#photosContainer";
const CLASS_ALBUM_ITEM = "albumItem";
const CLASS_ALBUM_ITEM_ACTIVE = "albumItem__active";
const CLASS_PHOTO_ITEM = "photoItem";
const DEFAULT_ALBUM_INDEX = 0;

const albumList = document.querySelector(SELECTOR_ALBUM_LIST);
const photosContainer = document.querySelector(SELECTOR_PHOTOS_CONTAINER);


let albums = [];
let photos = [];

window.addEventListener("load", onWindowLoad);
albumList.addEventListener("click", onAlbumListClick);


function onWindowLoad () {
    loadAlbums();
}

function onAlbumListClick (event) {
    const target = event.target;
    const albumEl = findAlbum(target);

    if (albumEl) {
        onAlbumClick(albumEl);
    }
}

function onAlbumClick(album) {
    const elementToOpen = album;
    const elementToClose = findAlbumActive();
    if (elementToOpen !== elementToClose) {
        closeAlbum(elementToClose);
        setAlbumActive(elementToOpen);
        loadPhotos(elementToOpen.id);
    }
}

function loadAlbums () {
    AlbumsApi
        .getAlbumList()
        .then((list) => {
            albums = list;
            renderAlbumList(list);
            setAlbumActive(albumList.children[DEFAULT_ALBUM_INDEX]);
            const albumId = albums[DEFAULT_ALBUM_INDEX].id;
            loadPhotos(albumId);
        })
        .catch(error => showError(error));
}

function loadPhotos (albumId) {
    PhotosApi
        .getPhotoList(albumId)
        .then((list) => {
            photos = list;
            renderPhotoList(list);
        })
        .catch(error => showError(error));
}

function renderAlbumList (list) {
    const htmlStr = list.map(generateAlbumHtml).join("");

    albumList.innerHTML = htmlStr;
}

function generateAlbumHtml (album) {
    return `
        <li id="${album.id}" class=${CLASS_ALBUM_ITEM}>${album.title}</li>
    `
}

function showError (error) {
    alert(error);
}

function renderPhotoList (list) {
    const htmlStr = list.map(generatePhotoHtml).join("");

    photosContainer.innerHTML = htmlStr;
}

function generatePhotoHtml (photo) {
    return `
        <img class=${CLASS_PHOTO_ITEM} src="${photo.url}" alt="photo">
    `
}

function findAlbum (element) {
    return element.closest(`.${CLASS_ALBUM_ITEM}`)
}

function findAlbumActive () {
    return Array.from(albumList.children)
                .find((listItem) => listItem.classList.contains(CLASS_ALBUM_ITEM_ACTIVE));
}

function setAlbumActive (element) {
    element.classList.add(CLASS_ALBUM_ITEM_ACTIVE);
}

function closeAlbum (element) {
    element.classList.remove(CLASS_ALBUM_ITEM_ACTIVE);
}