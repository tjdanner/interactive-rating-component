const submit = document.getElementById('submit');
const buttons = document.getElementsByClassName('button');
const purple = getComputedStyle(document.querySelector(':root')).getPropertyValue('--purple');
const lightGrey = getComputedStyle(document.querySelector(':root')).getPropertyValue('--light-grey');
const score = document.getElementById('score');
const ratingSelect = document.getElementById('rating-select');
const submittedBox = document.getElementById('sumbitted');

mouseoverSubmit = () => {
    submit.style.backgroundColor = 'white';
    submit.style.color = purple;
    submit.style.fontSize = '';
}

submit.addEventListener('mouseover', mouseoverSubmit)

mouseoutSubmit = () => {
    submit.style.backgroundColor = purple;
    submit.style.color = 'white';
}

submit.addEventListener('mouseout', mouseoutSubmit);

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

        submit.innerHTML = 'submit';
        submit.style.backgroundColor = '';
        submit.style.color = '';
        submit.style.fontSize = '';
        submit.addEventListener('mouseover', mouseoverSubmit);
        submit.addEventListener('mouseout', mouseoutSubmit);
    })
}

submit.addEventListener('click', submitEvent => {
    if (buttons[0].style.color === 'white') {
        score.innerHTML = `You selected ${buttons[0].innerHTML} out of 5`
        ratingSelect.style.display = 'none';
        submitted.style.display = 'flex';
    } else if (buttons[1].style.color === 'white') {
        score.innerHTML = `You selected ${buttons[1].innerHTML} out of 5`
        ratingSelect.style.display = 'none';
        submitted.style.display = 'flex';
    } else if (buttons[2].style.color === 'white') {
        score.innerHTML = `You selected ${buttons[2].innerHTML} out of 5`
        ratingSelect.style.display = 'none';
        submitted.style.display = 'flex';
    } else if (buttons[3].style.color === 'white') {
        score.innerHTML = `You selected ${buttons[3].innerHTML} out of 5`
        ratingSelect.style.display = 'none';
        submitted.style.display = 'flex';
    } else if (buttons[4].style.color === 'white') {
        score.innerHTML = `You selected ${buttons[4].innerHTML} out of 5`
        ratingSelect.style.display = 'none';
        submitted.style.display = 'flex';
    } else {
        submit.innerHTML = "Please select a rating."
        submit.style.backgroundColor = 'red';
        submit.style.color = 'white';
        submit.removeEventListener('mouseout', mouseoutSubmit)
        submit.removeEventListener('mouseover', mouseoverSubmit)
        submit.addEventListener('mouseout', event => {
            submit.style.backgroundColor = 'red';
            submit.style.color = 'white';
        })
        submit.addEventListener('mouseover', event => {
            submit.style.backgroundColor = 'white';
            submit.style.color = 'red';
        })
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.color = ''
        buttons[i].style.backgroundColor = ''
    }
    
})
