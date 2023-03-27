const loginBtn = document.getElementById('loginModalButton');
const loginModal = document.getElementById('loginModal');
const closeBtns = document.querySelectorAll('btn-close');

loginBtn.click(() => {
  loginModal.click();
});

closeBtns.click(() => {
  loginModal.click();
});


