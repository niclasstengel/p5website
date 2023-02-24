// The line below adds autocompletion for p5.js which is very Helpful
//  <reference path="../../p5.d.ts" />

// HELP: https://repl.it/@vogelino/P5js-Arrays-and-Objects

// Here are the docs for P5.js: https://p5js.org/reference/

const menuContainer = document.getElementById('scribbleMenu');

function scribbleMenu(sketch) {
   
  
    sketch.setup = function() {
      const containerSize = menuContainer.getBoundingClientRect();
      const canvs = sketch.createCanvas(containerSize.height * 2.65, containerSize.height);
      sketch.noLoop();
      canvs.mouseOver(() => sketch.loop())
      canvs.mouseOut(() => sketch.noLoop())
      sketch.frameRate(6);

    };

    sketch.draw = function () {
        let rrrValue = (0.075 * sketch.height);


        
        //p ground layer
        sketch.translate(rrrValue, rrrValue);
        sketch.clear();
        sketch.fill (sketch.color(248, 244, 237));
        sketch.noStroke();
        sketch.stroke(0);
        sketch.strokeWeight(1.5);
        sketch. beginShape();
        
        sketch.vertex(0.831055 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),60.2403 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(2.46765 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),39.461 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(8.96549 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),24.526 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(16.4155 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),15.3497 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(35.2466 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),3.53299 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(48.3842 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),1.26029 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(84.5973 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),0.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(119.662 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),0.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(164.467 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),0.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(185.247 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),0.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(235.247 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),0.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(1000, 0.5);
        sketch.vertex(1000, 1000);
        sketch.vertex(0, 1000);
        sketch.vertex(0.831055 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),84.2662 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(0.831055 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),60.2403 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));

        
        sketch.endShape(sketch.CLOSE);

        

    }
  
    
  
    sketch.windowResized = function() {
      const containerSize = menuContainer.getBoundingClientRect();
      sketch.resizeCanvas(containerSize.width, containerSize.height)
    }
  
    return sketch;
  }
  
  new p5(scribbleMenu, menuContainer)