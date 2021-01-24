

let Angkor = document.getElementById('Angkor')

let Rock = document.getElementById('Rock')

let Great = document.getElementById('Great')

Angkor.addEventListener('click', ()=> {
    displayer('Angkor');
}
);

Rock.addEventListener('click', ()=> {
    displayer('Rock');
}
);

Great.addEventListener('click', ()=> {
    displayer('Great');
}
);

let Ang = document.getElementById('Ang')
let Roc = document.getElementById('Roc')

let Gre = document.getElementById('Gre')

let Ang2 = document.getElementById('Ang2')
let Roc2 = document.getElementById('Roc2')

let Gre2 = document.getElementById('Gre2')


function displayer(string) {
    if (string == 'Angkor') {
        Ang.classList.remove("hide");
        Roc.classList.add('hide');
        Gre.classList.add('hide');
        Ang2.classList.remove("hide");
        Roc2.classList.add('hide');
        Gre2.classList.add('hide');
    }
    else if (string == 'Rock') {
        Ang.classList.add("hide");
        Roc.classList.remove('hide');
        Gre.classList.add('hide');
        Ang2.classList.add("hide");
        Roc2.classList.remove('hide');
        Gre2.classList.add('hide');
    }
    else if (string == 'Great') {
        Ang.classList.add("hide");
        Roc.classList.add('hide');
        Gre.classList.remove('hide');
        Ang2.classList.add("hide");
        Roc2.classList.add('hide');
        Gre2.classList.remove('hide');
    }
}