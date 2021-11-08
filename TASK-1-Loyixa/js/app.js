"use strict";
// ✅
// Selectors - typing
const containerText = document.querySelector(".container__text");

const fName = document.querySelector('form #fName');
const age = document.querySelector('form #age');
const isMarried = document.querySelector('form #isMarried');

const nameText = document.querySelector('.fName');
const ageText = document.querySelector('.age');
const isMarriedText = document.querySelector('.isMarried');

const submit = document.querySelector('.btnSubmit');
const reset = document.querySelector('.btnReset');

const message = document.querySelector('.message');

      

// Event-Listeneg and Function
fName.addEventListener('input', function (e) {
    nameText.innerHTML = `Name: ${e.target.value}`;
});
age.addEventListener('input', function (e) {
    ageText.innerHTML = `Age: ${e.target.value}`;
});
isMarried.addEventListener('input', function (e) {
    isMarriedText.innerHTML = `isMarried: ${e.target.value}`;
});

submit.addEventListener('click', function () {
    message.innerHTML = '✅Successful send!';
});
reset.addEventListener('click', function () {
    containerText.innerHTML = "";
    message.innerHTML = 'Unsuccessful, try again!';
    
});


































