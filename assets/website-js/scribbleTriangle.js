// The line below adds autocompletion for p5.js which is very Helpful
{/* <reference path="../../p5.d.ts" /> */}
// HELP: https://repl.it/@vogelino/P5js-Arrays-and-Objects

// Here are the docs for P5.js: https://p5js.org/reference/

const triangleContainer = document.getElementById('scribbleTriangle');

function scribbleTriangle(sketch) {
   
  
    sketch.setup = function() {
      const containerSize = triangleContainer.getBoundingClientRect();
      const canvs = sketch.createCanvas(containerSize.width, containerSize.height);
      sketch.noLoop();
      canvs.mouseOver(() => sketch.loop())
      canvs.mouseOut(() => sketch.noLoop())
      sketch.frameRate(6);

    };

    sketch.draw = function () {
        let rrrValue = (0.01 * sketch.height);
        sketch.clear();
        sketch.fill (sketch.color(248, 244, 237));
        sketch.noStroke();
        sketch. beginShape();

        sketch.vertex(50 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 0 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(52.05 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 1.18 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(55.43 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 7.01 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(61.77 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 17.95 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(65.97 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 25.2 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(70.18 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 32.45 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(77.93 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 45.84 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(82.35 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 53.45 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(88.93 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 64.82 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(92.78 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 71.45 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(96.23 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 77.41 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(99.68 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 83.36 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        
        sketch.vertex(97.63 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 86.9 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(83.43 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 86.9 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(74.93 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 86.9 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(62.43 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 86.9 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(56.43 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 86.9 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(41.93 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 86.9 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(34.93 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 86.9 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(25.18 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 86.9 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(15.43 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 86.9 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(4.93 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 86.9 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(2.37 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 86.9 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        
        sketch.vertex(0.32 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 83.36 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(4.93 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 75.41 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(11.07 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 64.82 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(12.73 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 61.95 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(18.52 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 51.95 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(23.45 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 43.45 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(27.65 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 36.2 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(31.85 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 28.95 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(35.62 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 22.45 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(39.39 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 15.95 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(43.44 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 8.95 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(47.95 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 1.18 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));




        sketch.endShape(sketch.CLOSE);

    }
  
    
  
    sketch.windowResized = function() {
      const containerSize = triangleContainer.getBoundingClientRect();
      sketch.resizeCanvas(containerSize.width, containerSize.height)
    }
  
    return sketch;
  }
  
  new p5(scribbleTriangle, triangleContainer)