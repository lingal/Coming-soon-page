const validationMsg = document.querySelector('.email-status');
const changeColor = document.querySelector('.email');
const submitBtn = document.querySelector('[data-submit]');
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

const invalidEl = document.querySelector('.invalid');




submitBtn.addEventListener('click', function() {
  const inputEl = document.querySelector('input').value;
  
  if(inputEl.match(emailPattern)) {
    validationMsg.textContent = '';
    invalidEl.style.display = 'none';
    changeColor.style.color = '#ce9797';
    changeColor.style.borderColor = 'hsla(0, 6%, 24%, 0.198)';
  }else {
    changeColor.style.borderColor = '#f96262';
    changeColor.style.color = '#000';
    validationMsg.style.color = '#ce9797';
    validationMsg.textContent = 'Please provide a valid email';
    invalidEl.style.display = 'inline-block';
  }
})