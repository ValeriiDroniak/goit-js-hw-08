const throttle = require('lodash.throttle');

const feedbackForm = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY_FORM = 'feedback-form-state';
const feedbackObj = {};

initForm();

feedbackForm.addEventListener('input', throttle(onSavedFromLocalStorage, 500));
feedbackForm.addEventListener('submit', onSubmit);


function onSavedFromLocalStorage(event) {
    feedbackObj[event.target.name] = event.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY_FORM, JSON.stringify(feedbackObj))
}

function initForm() {
    let feedbackObj = localStorage.getItem(LOCALSTORAGE_KEY_FORM);
    if (feedbackObj) {
        feedbackObj = JSON.parse(feedbackObj);
        Object.entries(feedbackObj).forEach(([name, value]) => {
            feedbackForm.elements[name].value = value;
        })
    }
}

function onSubmit(evt) {
    evt.preventDefault();

    const formData = new FormData(feedbackForm);

    formData.forEach((value, name) => console.log(`${name}: ${value}`));
    clearFeedbackFormAndStorage();
}

function clearFeedbackFormAndStorage() {
    feedbackForm.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY_FORM);
}