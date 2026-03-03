let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const data = form.querySelector('.form-input');

form.addEventListener('input', e => {
  const formGet = new FormData(form);

  formData.email = formGet.get('email');
  formData.message = formGet.get('message');

  const zip = JSON.stringify(formData);
  localStorage.setItem('feedback-form-state', zip);
});

document.addEventListener('DOMContentLoaded', e => {
  const zip = localStorage.getItem('feedback-form-state');
  const data = JSON.parse(zip) || {};
  form.elements.email.value = data.email || '';
  form.elements.message.value = data.message || '';
  formData.email = data.email;
  formData.message = data.message;
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const formGet = new FormData(form);

  formData.email = formGet.get('email');
  formData.message = formGet.get('message');

  if (form.elements.email.value === '' || form.elements.message.value === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
    formData = structuredClone(formData);
  }
});
