let questions =     [["Question 1?", "Option A", " Option B", " Option C", 1], 
                    ["Question 2?", "Option D", " Option E", " Option F", 2], 
                    ["Question 3?", "Option G", " Option H", " Option I", 3],
                    ["Question 4?", "Option J", " Option K", " Option L", 1],
                    ["Question 5?", "Option M", " Option N", " Option O", 2],
                    ["Question 6?", "Option P", " Option R", " Option R", 3]];
let questionID = 1;

    
let title = document.getElementsById('question')
let but1 = document.getElementById('but1');
let but2 = document.getElementById('but2');
let but3 = document.getElementById('but3');
let correct = document.getElementsById('correct');
let incorrect = document.getElementsByName('incorrect')


but1.addEventListener('click', ()=> {
    check('1')
})
but2.addEventListener('click', ()=> {
    check('2')
})
but3.addEventListener('click', ()=> {
    check('3')
})

function check(string) {
    if(questions[questionID][4] == string)
    {
        correct.classList.remove('hide');
        incorrect.classList.add('hide');
    }
    else {
        correct.classList.add('hide');
        incorrect.classList.remove('hide');

    }

    questionID = Math.floor(Math.random() * questions.length);
    title.textContent = questions[questionID][0];
    but1.textContent = questions[questionID][1];
    but2.textContent = questions[questionID][2];
    but3.textContent = questions[questionID][3];

}