const submit = document.getElementById('submit');
const buttons = document.getElementsByClassName('button');
const orange = getComputedStyle(document.querySelector(':root')).getPropertyValue('--orange');
const lightGrey = getComputedStyle(document.querySelector(':root')).getPropertyValue('--light-grey');

submit.addEventListener('mouseover', event => {
    submit.style.backgroundColor = 'white';
    submit.style.color = orange;
})

submit.addEventListener('mouseout', event => {
    submit.style.backgroundColor = orange;
    submit.style.color = 'white';
})

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseover', event => {
        buttons[i].style.backgroundColor = orange;
        buttons[i].style.color = 'white';
    })
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseout', event => {
        buttons[i].style.backgroundColor = '';
        buttons[i].style.color = '';
    })
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', event => {
        buttons[i].style.backgroundColor = lightGrey;
        buttons[i].style.color = 'white';
    })
}


