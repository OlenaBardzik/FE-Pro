import "./style.css";
import {StudentsGroupApi} from "./StudentsGroupApi";

const CLASS_DELETE_BUTTON = "deleteBtn";
const CLASS_STUDENT_ITEM = "studentItem";
const CLASS_MARK_ITEM = "markItem";
const DEFAULT_MARKS = Array(10).fill(0);

const studentList = document.querySelector("#studentList");
const studentForm = document.querySelector("#studentForm");


studentForm.addEventListener("submit", onStudentFormSubmit);
studentList.addEventListener("click", onStudentListClick);
studentList.addEventListener("focusout", onStudentListFocusout);

StudentsGroupApi.getStudentsList().then((list) => {
    renderStudentsList(list)
})

function onStudentFormSubmit (event) {
    event.preventDefault();
    const student = getStudentData();

    if (isNameValid(student.name)) {
        StudentsGroupApi.create(student)
            .then((createdStudent) => {
                renderStudent(createdStudent);
            })
            .catch((error) => {
                showError(error);
            }) 
    } else {
        showError("The data is not valid");
    }

    clearStudentForm();
}

function onStudentListClick (event) {
    const target = event.target;
    const studentEl = findStudentElement(target);

    if (!studentEl) {
        return;
    }
    if (isDeleteBtn(target)) {
        deleteStudent(studentEl);
        return;
    }
}

function onStudentListFocusout (event) {
    const target = event.target;
    const studentEl = findStudentElement(target);

    if (isMarkInput(target) && studentEl) {
        const marks = getStudentMarks(studentEl);
    
        StudentsGroupApi.update(studentEl.id, {marks})
            .catch((error) => {
                showError(error);
            }) 
      }
}

function getStudentData () {
    return {
        name: studentForm.studentName.value,
        marks: DEFAULT_MARKS
    }
}

function renderStudent (student) {
    const htmlStr = generateStudentHtml(student);
    
    studentList.insertAdjacentHTML('beforeend', htmlStr);
}

function renderStudentsList (list) {
    const htmlStr = list.map(generateStudentHtml).join("");

    studentList.innerHTML = htmlStr;
}

function generateStudentHtml (student) {
    return `
        <tr class=${CLASS_STUDENT_ITEM} id="${student.id}">
            <td>${student.name}</td>
            ${renderMarksList(student.marks)}
            <td><button class=${CLASS_DELETE_BUTTON}>Delete</button></td>
        </tr>
    `
}

function renderMarksList (marks) {
    return marks.map(generateMarkHtml).join("");
}

function generateMarkHtml (mark) {
    return `
        <td><input type="number" class=${CLASS_MARK_ITEM} value=${mark}></td>
    `
}

function isNameValid (str) {
    return str.trim().length !== 0 && isNaN(str);
}

function findStudentElement (element) {
    return element.closest(`.${CLASS_STUDENT_ITEM}`);
}

function isDeleteBtn (element) {
    return element.classList.contains(CLASS_DELETE_BUTTON);
}

function deleteStudent (element) {
    StudentsGroupApi.delete(element.id)
        .then((deletedStudent) => {
            element.remove()
        })
        .catch((error) => {
            showError(error)
        }) 
}

function clearStudentForm () {
    studentForm.reset();
}

function showError (message) {
    alert(message)
}

function isMarkInput (element) {
    return element.classList.contains(CLASS_MARK_ITEM);
}

function getStudentMarks (element) {
    let marks = [];

    const studentInputs = element.querySelectorAll(`.${CLASS_MARK_ITEM}`);

    studentInputs.forEach(input => {
        marks.push(input.valueAsNumber);
    });

    return marks;
}
