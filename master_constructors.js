class Pixel {

    constructor (x, y, size, state = 0, staticState = false) {

        this.x = x;
        this.y = y;
        this.size = size;
        this.state = state;
        this.colour = [255, 255, 255]
        this.staticState = staticState;

    }

        draw() {

            push(); 
        
                fill (this.colour[0], this.colour[1], this.colour[2]);
                strokeWeight (2);
                stroke (0, 0, 0);
                rect (this.x, this.y, this.size, this.size);

            pop();
        }
    
        check() {

            return [this.x, this.x + this.size, this.y, this.y + this.size];
        }

        changeColour() {

            if(this.staticState === false) {

                //console.log("Change colour");

                if(this.state === 0){this.colour = [255, 255, 255]};
                if(this.state === 1){this.colour = [255, 0, 0]};
                if(this.state === 2){this.colour = [0, 255, 0]};
                if(this.state === 3){this.colour = [0, 0, 255]};
                if(this.state === 4){this.colour = [120, 0, 120]};
                if(this.state === 5){this.colour = [200, 0, 0]};
                if(this.state === 6){this.colour = [0, 200, 0]};
                if(this.state === 7){this.colour = [0, 0, 200]};
                if(this.state === 8){this.colour = [100, 0, 100]};
            }
        }       

            changeState() {

                if(this.staticState === false) {this.staticState = true;} 
                else {this.staticState = false}
                //console.log("Change State to " + this.staticState);
                 
            }

            highlight() {

                this.state = this.state + 4;
                //console.log("Highlighted")

            }


}

Array.prototype.shuffle = function() {
    var input = this;
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
         
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
}

Array.prototype.swap = function (x,y) {
    var b = this[x];
    this[x] = this[y];
    this[y] = b;
    return this;
  }

  Math.dist = function(x1,y1,x2,y2){ 
    if(!x2) x2=0; 
    if(!y2) y2=0;
    return Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1)); 
  }

  function degToRad(x) {
	return x / 180 * Math.PI;
}

function radToDeg(x) {
	return x / Math.PI * 180;
}




class  GameSquare {

    constructor (x, y, size, colour = [[255,255,255],[255,255,255],[255,255,255],[255,255,255],[255,255,255]], state = 0, text = "") {

        this.x = x;
        this.y = y;
        this.size = size;
        this.colour = colour;
        this.state = state;
        this.text = text;
        this.shade = colour[state];
    
    }

        draw() {

            push(); 
        
                fill (this.shade[0], this.shade[1], this.shade[2]);
                strokeWeight (4);
                stroke (0, 0, 0);
                rect (this.x, this.y, this.size, this.size);

                textSize(this.size * 0.6);
                fill(0, 0, 0);
                textAlign(CENTER, CENTER);
                text(this.text, this.x + this.size/2, this.y + this.size/2);

            pop();
        }
    
        check() {

            return [this.x, this.x + this.size];
        }

        changeColour() {
            
            this.shade = [this.colour[this.state]];
            }
 }       

class LetterTile {

    constructor (x, y, size, state = 0, staticState = false, text) {

        this.x = x;
        this.y = y;
        this.size = size;
        this.state = state;
        this.colour = [255, 255, 255]
        this.staticState = staticState;
        this.text = text;

    }

        draw() {

            push(); 
        
                fill (this.colour[0], this.colour[1], this.colour[2]);
                strokeWeight (2);
                stroke (0, 0, 0);
                rect (this.x, this.y, this.size, this.size);

                textSize(this.size * 0.6);
                fill(0, 0, 0);
                textAlign(CENTER, CENTER);
                text(this.text, this.x + this.size/2, this.y + this.size/2);

            pop();
        }
    
        check() {

            return [this.x, this.x + this.size, this.y, this.y + this.size];
        }

        changeColour() {

            if(this.staticState === false) {

                //console.log("Change colour");

                if(this.state === 0){this.colour = [255, 255, 255]};
                if(this.state === 1){this.colour = [255, 0, 0]};
                if(this.state === 2){this.colour = [0, 255, 0]};
                if(this.state === 3){this.colour = [0, 0, 255]};
                if(this.state === 4){this.colour = [120, 0, 120]};
                if(this.state === 5){this.colour = [200, 0, 0]};
                if(this.state === 6){this.colour = [0, 200, 0]};
                if(this.state === 7){this.colour = [0, 0, 200]};
                if(this.state === 8){this.colour = [100, 0, 100]};
            }
        }       

            changeState() {

                if(this.staticState === false) {this.staticState = true;} 
                else {this.staticState = false}
                //console.log("Change State to " + this.staticState);
                    
            }

            highlight() {

                this.state = this.state + 4;
                //console.log("Highlighted")

            }


}
























