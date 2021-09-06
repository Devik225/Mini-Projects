
// Game algos

var c = 4;
var points = 0;
var t = 1000;
var moves =[];
console.log(moves);

while(points >= 0){
    var num = Math.floor(Math.random() * 4)+1;
    if(num === 1){
        moves.push("green");
    }
    else if(num === 2){
        moves.push("red");
    }
    else if(num === 3){
        moves.push("yellow");
    }
    else if(num === 4){
        moves.push("blue");
    }
    
    var one_move = moves[points]; 

    btn_animate(one_move);

    var temp = [];

    for(var i=0; i<moves.length; i++){
        $(".btn").on("click", function () {

            play_sound(this.id);
            btn_animate(this);
            temp.push(this.id);
        
        });
    };

    if(temp != moves){
        break;
    }

    points++;
    if(points == 3){
        break;
    }
   
};

console.log(moves);


// Button functionality

// via cursor
$(".btn").on("click", function () {

    play_sound(this.id);
    btn_animate(this);

});

//via arrow keys
document.addEventListener("keypress", function(event){

    var num = event.key;

    if(num === "5"){
        play_sound("green");
        btn_animate($(".green"));

    }
    else if(num === "6"){
        play_sound("red");
        btn_animate($(".red"));

    }
    else if(num === "2"){
        play_sound("yellow");
        btn_animate($(".yellow"));
        
    }
    else if(num === "3"){
        play_sound("blue");
        btn_animate($(".blue"));
        
    }

    console.log(event.key);

})


// btn functions

function btn_animate(key){
    $(key).addClass("pressed");
    setTimeout(() => {
        $(key).removeClass("pressed");
    }, 100);
}

function play_sound(color){
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}