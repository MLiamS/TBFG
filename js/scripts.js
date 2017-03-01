// Back End
function startGame() {
    myGameArea.start();
}
//
// var myGameArea = {
//     canvas : document.createElement("canvas"),
//     start : function() {
//         this.canvas.width = 480;
//         this.canvas.height = 270;
//         this.context = this.canvas.getContext("2d");
//         document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//     }
// }




function Player(name, hp, atk){
  this.name = name;
  this.hp = hp;
  this.atk= atk;
}



var hp = 100;
var atk= 50;



//Front End
$(function(){
  $("form#input-form").submit(function(event) {
  event.preventDefault();
  var inputName = $("input#nameInput").val();
  var newPlayer =  new Player(inputName, hp, atk);
  $("#play1").append("<li>" + newPlayer.name + "</li>");
  $("#play1").append("<li>" + newPlayer.hp + "</li>"+ "</li>");
  $("#play1").append("<li>" + newPlayer.atk + "</li>");
});



});
