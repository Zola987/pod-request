function validateEmail() {
  let email = document.querySelector('.email').value;
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    document.querySelector('.small').style.visibility = 'hidden';
  } else {
    document.querySelector('.small').style.visibility = 'visible';
  }
}
