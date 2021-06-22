'use strict';
let tableContainer = document.getElementById('tableContainer');
let table = document.getElementById('table');
tableContainer.appendChild(table);
let allGrades = [];
let tableHeading = ['Student Name', 'Student Grade', 'Course'];
let grade;
function Grade(studentName, course) {
    this.studentName = studentName;
    this.course = course;
    this.grade = generateRandomGrade();
    allGrades.push(this);
}

let form = document.getElementById('form');
form.addEventListener('submit', formHandler);

function formHandler(event) {
    event.preventDefault();

    let studentName = event.target.studentName.value;
    let course = event.target.course.value;
    let student = new Grade(studentName, course);
    student.render();
    localStorage.setItem('studentGrade', JSON.stringify(allGrades));

}

function header() {
    let trHeader = document.createElement('tr');
    table.appendChild(trHeader);

    for (let i = 0; i < tableHeading.length; i++) {
        let th = document.createElement('th');
        trHeader.appendChild(th);
        th.textContent = tableHeading[i];
    }

}
header();

Grade.prototype.render = function () {
    let trBody = document.createElement('tr');
    table.appendChild(trBody);

    let tdStudent = document.createElement('td');
    trBody.appendChild(tdStudent);
    tdStudent.textContent = this.studentName;

    let tdGrade = document.createElement('td');
    trBody.appendChild(tdGrade);
    tdGrade.textContent = this.grade;

    let tdCourse = document.createElement('td');
    trBody.appendChild(tdCourse);
    tdCourse.textContent = this.course;
}

function gettingDataFromLocalStorage() {
    if (localStorage.getItem('studentGrade')) {
        allGrades = JSON.parse(localStorage.getItem('studentGrade'));
        renderAgain();
    }
}
gettingDataFromLocalStorage();

function renderAgain() {
    for (let i = 0; i < allGrades.length; i++) {
        let trBody = document.createElement('tr');
        table.appendChild(trBody);

        let tdStudent = document.createElement('td');
        trBody.appendChild(tdStudent);
        tdStudent.textContent = allGrades[i].studentName;

        let tdGrade = document.createElement('td');
        trBody.appendChild(tdGrade);
        tdGrade.textContent = allGrades[i].grade;

        let tdCourse = document.createElement('td');
        trBody.appendChild(tdCourse);
        tdCourse.textContent = allGrades[i].course;
    }
}


function generateRandomGrade() {
    return Math.floor((Math.random() * 100) + 0);
}