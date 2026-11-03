const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const navContainer = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navContainer.classList.toggle('open');
    hamButton.classList.toggle('open');

    if (hamButton.classList.contains('open')) {
        hamButton.textContent = 'X';
    } else {
        hamButton.textContent = ''; // CSS ::before pseudo-element handles '≡'
    }
});

const currentYearSpan = document.querySelector('#currentyear');
const lastModifiedParagraph = document.querySelector('#lastModified');

const today = new Date();
currentYearSpan.textContent = today.getFullYear();

lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;