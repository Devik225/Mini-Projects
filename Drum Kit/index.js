var no_drums = document.querySelectorAll(".drum").length;

for(var i=0; i<no_drums; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        make_sound(this.innerHTML);
        btn_animate(this.innerHTML);

    });

}

document.addEventListener("keypress", function(event){

    make_sound(event.key);  
    btn_animate(event.key);   

})


function make_sound(key){
    switch (key) {
        case "w":
            var music_1 = new Audio('sounds/1.mp3');
            music_1.play();
            break;
        case "a":
            var music_2 = new Audio('sounds/2.mp3');
            music_2.play();
            break;
        case "s":
            var music_3 = new Audio('sounds/3.mp3');
            music_3.play();
            break;
        case "d":
            var music_4 = new Audio('sounds/4.mp3');
            music_4.play();
            break;
        case "j":
            var music_5 = new Audio('sounds/5.mp3');
            music_5.play();
            break;
        case "k":
            var music_6 = new Audio('sounds/6.mp3');
            music_6.play();
            break;
        case "l":
            var music_7 = new Audio('sounds/7.mp3');
            music_7.play();
            break;    
    
        default:
            break;
    }
}

function btn_animate(key){

    var button = document.querySelector("." + key);
    button.classList.add("pressed");

    setTimeout(
        function(){button.classList.remove("pressed")} , 200);
}

