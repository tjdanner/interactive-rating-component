const submit = document.getElementById('submit');
const buttons = document.getElementsByClassName('button');
const purple = getComputedStyle(document.querySelector(':root')).getPropertyValue('--purple');
const lightGrey = getComputedStyle(document.querySelector(':root')).getPropertyValue('--light-grey');

submit.addEventListener('mouseover', event => {
    submit.style.backgroundColor = 'white';
    submit.style.color = purple;
})

submit.addEventListener('mouseout', event => {
    submit.style.backgroundColor = purple;
    submit.style.color = 'white';
})

buttonActive = () => {
    for (let i = 0; i < buttons.length; i++) {
        event.target.style.backgroundColor = purple;
        event.target.style.color = 'white';
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseover', buttonActive)
}

buttonRevert = () => {
    for (let i = 0; i < buttons.length; i++) {
        event.target.style.backgroundColor = '';
        event.target.style.color = '';
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseout', buttonRevert)
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', event => {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.color = '';
            buttons[i].style.backgroundColor = '';
            buttons[i].addEventListener('mouseover', buttonActive)
            buttons[i].addEventListener('mouseout', buttonRevert)
        }
        buttons[i].style.backgroundColor = lightGrey;
        buttons[i].style.color = 'white';
        event.target.removeEventListener('mouseout', buttonRevert)
        event.target.removeEventListener('mouseover', buttonActive)
    })
}


