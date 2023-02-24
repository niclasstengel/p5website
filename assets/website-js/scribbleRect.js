// The line below adds autocompletion for p5.js which is very Helpful
{/* <reference path="../../p5.d.ts" /> */}
// HELP: https://repl.it/@vogelino/P5js-Arrays-and-Objects

// Here are the docs for P5.js: https://p5js.org/reference/

const rectContainer = document.getElementById('scribbleRect');

function scribbleRect(sketch) {
   
  
    sketch.setup = function() {
      const containerSize = rectContainer.getBoundingClientRect();
      const canvs = sketch.createCanvas(containerSize.width, containerSize.height);
      sketch.noLoop();
      canvs.mouseOver(() => sketch.loop())
      canvs.mouseOut(() => sketch.noLoop())
      sketch.frameRate(6);

    };

    sketch.draw = function () {
        let rrrValue = (0.015 * sketch.height);
        sketch.clear();
        sketch.fill (sketch.color(248, 244, 237));
        sketch.noStroke();
        sketch. beginShape();
        sketch.vertex(2.84 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 0 + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(9.50 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 0 + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(21.00 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 0 + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(36.50 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 0 + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(44.50 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 0 + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(52.50 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 0 + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(64.50 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 0 + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(74.00 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 0 + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(83.50 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 0 + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(97.16 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 0 + sketch.random(-rrrValue, rrrValue));

        sketch.vertex(sketch.height + sketch.random(-rrrValue, rrrValue), 2.84 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(sketch.height + sketch.random(-rrrValue, rrrValue), 9.97 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(sketch.height + sketch.random(-rrrValue, rrrValue), 21.72 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(sketch.height + sketch.random(-rrrValue, rrrValue), 33.47 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(sketch.height + sketch.random(-rrrValue, rrrValue), 45.97 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(sketch.height + sketch.random(-rrrValue, rrrValue), 54.97 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(sketch.height + sketch.random(-rrrValue, rrrValue), 63.97 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(sketch.height + sketch.random(-rrrValue, rrrValue), 70.47 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(sketch.height + sketch.random(-rrrValue, rrrValue), 88.97 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(sketch.height + sketch.random(-rrrValue, rrrValue), 97.16 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));

        sketch.vertex(97.16 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(86.50 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(72.00 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(64.50 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(55.75 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(47.00 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(33.50 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(27.00 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(7.50 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(2.84 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), sketch.height + sketch.random(-rrrValue, rrrValue));

        sketch.vertex(0 + sketch.random(-rrrValue, rrrValue), 97.16 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(0 + sketch.random(-rrrValue, rrrValue), 86.97 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(0 + sketch.random(-rrrValue, rrrValue), 78.72 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(0 + sketch.random(-rrrValue, rrrValue), 70.47 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(0 + sketch.random(-rrrValue, rrrValue), 59.97 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(0 + sketch.random(-rrrValue, rrrValue), 54.22 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(0 + sketch.random(-rrrValue, rrrValue), 48.47 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(0 + sketch.random(-rrrValue, rrrValue), 38.47 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(0 + sketch.random(-rrrValue, rrrValue), 23.97 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(0 + sketch.random(-rrrValue, rrrValue), 18.47 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(0 + sketch.random(-rrrValue, rrrValue), 10.65 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(0 + sketch.random(-rrrValue, rrrValue), 2.84 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));   
       
        sketch.endShape(sketch.CLOSE);

    }
  
    
  
    sketch.windowResized = function() {
      const containerSize = rectContainer.getBoundingClientRect();
      sketch.resizeCanvas(containerSize.width, containerSize.height)
    }
  
    return sketch;
  }
  
  new p5(scribbleRect, rectContainer)