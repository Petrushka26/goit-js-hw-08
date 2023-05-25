
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

let formData = {};
const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormData, 500));
reloadTextarea();

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log({email: refs.input.value, message: refs.textarea.value});
  e.currentTarget.reset();
  formData = {};
  localStorage.removeItem(STORAGE_KEY);
}

function reloadTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage) {
    refs.input.value = savedMessage.email ?? "";
    refs.textarea.value = savedMessage.message ?? "";
}
}
