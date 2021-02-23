const callBackForm = document.querySelector('.callbackForm');
const thankYouModal = document.querySelector('#thankYouModal');

const userName = document.querySelector('#callbackFormInputName');
const userEmail = document.querySelector('#callbackFormInputEmail');
const userPhone = document.querySelector('#callbackFormInputPhone');

userPhone.addEventListener('click', function () {
    if (!userPhone.value.trim()) {
        userPhone.value = '+380';
    }
});

userPhone.addEventListener('blur', function () {
    if (userPhone.value === '+380') {
        userPhone.value = '';
    }
});

callBackForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let hasError = false;

    if (!userName.value.trim()) {
        userName.classList.add('callbackFormInputError');
        hasError = true;
    } else {
        userName.classList.remove('callbackFormInputError');
    };

    if (!userEmail.value.trim() || !isEmailValid(userEmail.value)) {
        userEmail.classList.add('callbackFormInputError');
        hasError = true;
    } else {
        userEmail.classList.remove('callbackFormInputError');
    };

    if (!userPhone.value.trim() || !isPhoneValid(userPhone.value)) {
        userPhone.classList.add('callbackFormInputError');
        hasError = true;
    } else {
        userPhone.classList.remove('callbackFormInputError');
    };

    if (hasError) {
        return
    };

    userName.value = '';
    userEmail.value = '';
    userPhone.value = '';


    thankYouModal.classList.add('modalActive');

    setTimeout(function () {
        thankYouModal.classList.remove('modalActive');
    }, 2000);
});

function isPhoneValid(phone = '') {
    const regexp = /(\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4})$/;

    return phone.match(regexp);
}

function isEmailValid(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}