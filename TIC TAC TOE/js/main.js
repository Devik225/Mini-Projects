
//variables
var chance = 1;

var player1 = [];
var player2 = [];

var p1_name = "Player 1";
var p2_name = "Player 2";

var p1_win=0;
var p2_win=0;
var tie = 0;

$(".d_cross").css("opacity", "1");
$(".d_circle").css("opacity", "0.4");



// on click
$(".cell").click(function (e) { 
    // console.log(this.id);
    if(chance == 1){

        if(! (player1.includes(this.id) || player2.includes(this.id)) ){
            $(this).html('<div class="fixed"><img class=" cross_click " src="svg/close.svg" height="110px" style="color: aliceblue; "></img></div>');
            player1.push(this.id);
            $(".d_cross").css("opacity", "0.4");
            $(".d_circle").css("opacity", "1");

            check(player1);
            chance = 2;
        }            
        
        
    }
    else{

        if(! (player1.includes(this.id) || player2.includes(this.id))){
            $(this).html('<div class="fixed"><img class=" cross_click " src="svg/circle.svg" height="110px" style="color: aliceblue; "></img></div>');
            player2.push(this.id);
            $(".d_cross").css("opacity", "1");
            $(".d_circle").css("opacity", "0.4");

            check(player2);
            chance = 1;
        }        
        
    }
});


//on hover
$(".cell").hover(function () {
        // over
        if(chance == 1){
            if(! (player1.includes(this.id) || player2.includes(this.id)) ){
                $(this).html('<div class= "temp"><img class=" cross_hover " src="svg/close.svg" height="110px" style="color: aliceblue; "></img>');
            }    
        }
        else{
            if(! (player1.includes(this.id) || player2.includes(this.id)) ){
                $(this).html('<div class= "temp"><img class=" cross_hover " src="svg/circle.svg" height="110px" style="color: aliceblue; "></img>');
            } 
        }
        
    }, function () {
        // out
        $(".temp").remove();
        console.log(this);
    }
);


//check the result
function check(player){

    var win = 0;
    var num = [];

    if(player.includes("1") && player.includes("2") && player.includes("3")){
        win = 1;
        num = [1, 2, 3];
    }
    else if(player.includes("4") && player.includes("5") && player.includes("6")){
        win = 1;
        num = [4, 5, 6];
    }
    else if(player.includes("7") && player.includes("8") && player.includes("9")){
        win = 1;
        num = [7, 8, 9];
    }
    else if(player.includes("1") && player.includes("4") && player.includes("7")){
        win = 1;
        num = [1, 4, 7];
    }
    else if(player.includes("2") && player.includes("5") && player.includes("8")){
        win = 1;
        num = [2, 5, 8];
    }
    else if(player.includes("3") && player.includes("6") && player.includes("9")){
        win = 1;
        num = [3, 6, 9];
    }
    else if(player.includes("1") && player.includes("5") && player.includes("9")){
        win = 1;
        num = [1, 5, 9];
    }
    else if(player.includes("3") && player.includes("5") && player.includes("7")){
        win = 1;
        num = [3, 5, 7];
    }

    if(win === 1){
    
        if(chance == 1){
            p1_win++;
            $("#p1_score").text(p1_win);

            alert(p1_name + " Won" + " Hurray!!!" );                
  
        }
        else{
            p2_win++;
            $("#p2_score").text(p2_win);

            alert(p2_name + " Won" + " Hurray!!!" );
            
        }

        player1 = [];
        player2 = [];
        chance = 1;
        $(".fixed").remove();

        
    }
    else if(player2.length + player1.length == "9"){
        tie++;
        $("#p_tie").text(tie);
        player1 = [];
        player2 = [];
        chance = 1;
        $(".fixed").remove();
    }

}

//change name

$("#p1").click(function (e) { 
    console.log("clicked");
    var name = prompt("Please enter your name");
    p1_name = name;
    $("#p1_name").text(name);    
});

$("#p2").click(function (e) { 
    console.log("clicked");
    var name = prompt("Please enter your name");
    p2_name = name;
    $("#p2_name").text(name);    
});