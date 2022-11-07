// select all li's add click event
// select all answers and toggle hidden class on click

const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');
const arrows = document.querySelectorAll('li img');

function clickEvent() {
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', () => {
            questions[i].classList.toggle('bold');
            answers[i].classList.toggle('hidden');
            arrows[i].classList.toggle('rotate')
        })
    }
}

clickEvent();


