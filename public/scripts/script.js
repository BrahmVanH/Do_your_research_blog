const userFirstName = document.getElementById('createFirstName').value.trim();
const userLastName = document.getElementById('createLastName').value.trim();
const userEmail = document.getElementById('createEmail').value.trim();
const userPassword = document.getElementById('createPassword').value.trim();
const reEnteredPassword = document
  .getElementById('reEnterCreatePassword')
  .value.trim();

const compareUserPasswords = () => {
  if (userPassword === reEnteredPassword) {
    return userPassword;
  } else {
    alert('Passwords do not match!');
  }
};

const createAccountFormHandler = async (event) => {
  event.preventDefault();
  if (userPassword && reEnteredPassword) {
    password = compareUserPasswords;
  }
  if (userFirstName && userLastName && userEmail && password) {
    const response = await fetch('/api/user/create-account', {
      method: 'POST',
      body: JSON.stringify({
        userFirstName,
        userLastName,
        userEmail,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      loginFetch(username, userPassword);
      // If login was successful, refresh page to show logged_in content
      setTimeout(reloadPage, 2000);
    } else {
      Alert(response.statusText);
    }
  }
};
