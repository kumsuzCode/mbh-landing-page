/****************************Code For Pop Up Form*****************************/

const openFormButtons = document.querySelectorAll('[data-form-target]');
const closeFormButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

// This will add an event listener to each of our buttons that
// OPENS the form so that when they are clicked, a function that 
// opens the form will be run.
openFormButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log("hello open listener");
        const form = document.querySelector(button.dataset.formTarget);
        openForm(form);
    })
})

// This will add an event listener to each of our buttons that
// CLOSES the form so that when they are clicked, a function that 
// opens the form will be run.
closeFormButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log("hello remove listener");
        const form = button.closest('.contact-form');
        closeForm(form);
    })
})

function openForm (form) {
    if (form == null) return;
    form.classList.add('active');
    overlay.classList.add('active');
}

function closeForm(form) {
    if (form == null) return;
    form.classList.remove('active');
    overlay.classList.remove('active');
}