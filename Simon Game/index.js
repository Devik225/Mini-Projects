
// Game start

//all variables
var moves = ["red", "green", "yellow", "blue"];
var sequence = [];
var user_sequence = [];
var mode = false;
var level = 0;
var highest_level = level;


//index-------------------------------------

$(document).keypress(function (e) { 
    if(!mode && e.key == "Enter"){
        console.log(e);
        mode = true;
        level++;
        $("#level-title").text("Level - " + level);
        make_sequence();
    }
});


// input---------------------

//via cursor-------
$(".btn").on("click", function () {
    var user_chosen_clr = $(this).attr("id");
    user_sequence.push(user_chosen_clr);
    action(user_chosen_clr);
    // console.log(user_sequence);
    check_move(user_sequence.length - 1);
    
})

//via keyboard-----
$(document).on("keypress", function(event){

    var num = event.key;

    var user_chosen_clr;

    if(num === "5"){
        user_chosen_clr = "green";
    }
    else if(num === "6"){        
        user_chosen_clr = "red";
    }
    else if(num === "2"){        
        user_chosen_clr = "yellow";        
    }
    else if(num === "3"){        
        user_chosen_clr = "blue";        
    }

    if(user_chosen_clr && mode == true){
        user_sequence.push(user_chosen_clr);
    action(user_chosen_clr);
    check_move(user_sequence.length - 1);
    }    

    // console.log(event.key);

})


//make sequence---------------
function make_sequence(){
    var num = Math.floor(Math.random() * 4);
    sequence.push(moves[num]);  
    setTimeout(action, 1000, moves[num]) 
    check_move()
}

//check each move-------------
function check_move(move){
    if(user_sequence[move] === sequence[move]){
        if(user_sequence.length === sequence.length){

            user_sequence = [];
            level++;
            $("#level-title").text("Level - " + level);
            if(level > highest_level){
                highest_level = level;
                $("#stats").text("Highest Level - " + highest_level);
            }
            make_sequence();

        }
    }
    else{
        $("#level-title").text("You Loose");

        $("body").addClass("game-over");
        var loose_music = new Audio("sounds/wrong.mp3");
        loose_music.play();

        setTimeout(restart, 2000);
        
    }
}

//restart function------------
function restart() {
    sequence = [];
    user_sequence = [];
    mode = false;
    level = 0;
    $("body").removeClass("game-over")
    $("#level-title").text("Press Enter to Start");
}


// btn functions--------------

function action(key){
    btn_animate("." + key);
    play_sound(key);
}

function btn_animate(key){
    $(key).addClass("pressed");
    setTimeout(() => {
        $(key).removeClass("pressed");
    }, 100);

    console.log("pressed" + key);
}

function play_sound(color){
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}