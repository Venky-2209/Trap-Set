// alert("Hi")

//Detection Button click

for(var i = 0; i<document.querySelectorAll('.drum').length; i++)
{
    
    // document.querySelectorAll('.drum').addEventlistner('click', munfun);
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        var key_word = this.innerHTML;
        makesound(key_word);
        buttonAnimation(key_word);
    });

    // alert("Hi");
}


//Detection Key Board press

document.addEventListener('keydown', function(event) {
    var key_word = event;
    makesound(key_word.key);
    buttonAnimation(key_word.key);
});


function makesound(key_word) {
    switch (key_word) {
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;

        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;

        case 'j':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
            
        case 'k':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;

        case 'l':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;

        default:
            break;
    }

}

function buttonAnimation(key_word) {
    var animation = document.querySelector('.' + key_word);
    animation.classList.add("pressed");

    setTimeout(function () {
        animation.classList.remove("pressed");},  100);
}


// function myfun() {
//     alert('Hi')
// }
