

let completedGame = false;
let showInstructions = false;
let canvasWidth = 800; let canvasHeight = 600;

function setup() {

    let myCanvas = createCanvas(canvasWidth, canvasHeight);
    myCanvas.parent('createdCanvas');
    initiate();
    instructions();

}

function draw() {

    if (!completedGame){playGame();};

}


function initiate(){

}

function touchStarted() {
 
}

function keyPressed() {
    
    if (keyCode === DOWN_ARROW) {
      
       

    } else if (keyCode === UP_ARROW) {
      
       

    } else if (keyCode === RIGHT_ARROW) {
        
      

    } else if (keyCode === LEFT_ARROW) {
       


      }
  }


function playGame() {

}

function instructions() {

    if(showInstructions === true){

    Swal({
        title: '<strong>Instructions</strong>', 
        type: 'info',
        showConfirmButton: true,
        
        html:
          '<p style="text-align: justify;">These are the instructions</p>',
    })
}
}

function endGame(){

    const toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 4000
      });
      
      toast({
        type: 'warning',
        title: 'Game Over!'
      })
} 
