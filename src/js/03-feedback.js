import throttle from 'lodash.throttle';

const STOAGE_KEY = 'feedback-form-state';

const formData = {};
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
reloadTextarea();

refs.form.addEventListener('input', e => {
  e.target.name;
  e.target.value;
  formData[e.target.name] = e.target.value;

  console.log(formData);
});

function onFormSubmit(e) {
  e.preventDefault();

  console.log('Sending');
  e.currentTarget.reset();
  localStorage.removeItem(STOAGE_KEY);
}

function onTextareaInput(e) {
  const message = e.target.value;

  localStorage.setItem(STOAGE_KEY, message);
}

function reloadTextarea() {
  const savedMessage = localStorage.getItem(STOAGE_KEY);

  if (savedMessage) {
    console.log(savedMessage);
    refs.textarea.value = savedMessage;
  }
}
