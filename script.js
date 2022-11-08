
// function to add click Event to all question blocks
// the click event toggles css classes on the question(<p>), answer(<p>) and img elements 
(function clickEvent() {
    const questionBlock = document.querySelectorAll('li');
    const questions = document.querySelectorAll('.question');
    const answers = document.querySelectorAll('.answer');
    const arrows = document.querySelectorAll('li img');


    for (let i = 0; i < questionBlock.length; i++) {
        questionBlock[i].addEventListener('click', () => {
            questions[i].classList.toggle('bold');
            answers[i].classList.toggle('hidden');
            arrows[i].classList.toggle('rotate');
        })
    }
})()




