// The line below adds autocompletion for p5.js which is very Helpful
{/* <reference path="../../p5.d.ts" /> */}
// HELP: https://repl.it/@vogelino/P5js-Arrays-and-Objects

// Here are the docs for P5.js: https://p5js.org/reference/

const circleContainer = document.getElementById('scribbleCircle');

function scribbleCircle(sketch) {
   
  
    sketch.setup = function() {
      const containerSize = circleContainer.getBoundingClientRect();
      const canvs = sketch.createCanvas(containerSize.width, containerSize.height);
      sketch.noLoop();
      canvs.mouseOver(() => sketch.loop())
      canvs.mouseOut(() => sketch.noLoop())
      sketch.frameRate(6);

    };

    sketch.draw = function () {
        sketch.clear();
        sketch.fill (sketch.color(248, 244, 237));
        sketch.noStroke();
        sketch. beginShape();
        for(let angle = 0; angle < 360; angle += 12) {
            const radius = sketch.height/2;
            let rValue = 0.05 * radius; 
            let outbreak = sketch.random(-rValue, rValue);
            const x = (radius + outbreak) * sketch.cos(Math.PI / 180 * angle);
            const y = (radius + outbreak) * sketch.sin(Math.PI / 180 * angle);
            sketch.vertex(x + sketch.height / 2, y + sketch.height / 2);
        }
        sketch.endShape(sketch.CLOSE);

    }
  
    
  
    sketch.windowResized = function() {
      const containerSize = circleContainer.getBoundingClientRect();
      sketch.resizeCanvas(containerSize.width, containerSize.height)
    }
  
    return sketch;
  }
  
  new p5(scribbleCircle, circleContainer)