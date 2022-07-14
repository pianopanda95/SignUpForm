const inputFields = [...document.querySelectorAll('.contact-wrapper input')];
const createAccountButton = document.querySelector("button[type]");
const contactWrapper = document.querySelector('.contact-wrapper');

const password = inputFields[4];
const passwordCheck = inputFields[5];

const popUp = document.createElement('div');
popUp.classList.add('popup');

createAccountButton.addEventListener('click', (e) => {

    e.preventDefault();
    contactWrapper.appendChild(popUp);

    const customizePopUp = content => {
        popUp.textContent = '';
        popUp.textContent += content;
    }

    if (inputFields.some(x => x.value === '' || !x.checkValidity())){
        customizePopUp('Please make sure to fill out all the fields correctly.');
    } else if (password.value !== passwordCheck.value) {
        customizePopUp('The two passwords must be the a same.');
    } else {
        customizePopUp('Thanks for the subscribtion! ^_^');
        popUp.style.color = 'aquamarine';
        contactWrapper.appendChild(popUp);
        setTimeout( () => {
            document.querySelector('form').submit();
        }, 2500);
    }

})