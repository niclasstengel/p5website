// The line below adds autocompletion for p5.js which is very Helpful
{/* <reference path="../../p5.d.ts" /> */}
// HELP: https://repl.it/@vogelino/P5js-Arrays-and-Objects

// Here are the docs for P5.js: https://p5js.org/reference/

const container1 = document.getElementById('scribblep5');

function scribblep5(sketch) {
   
  
    sketch.setup = function() {
      const containerSize = container1.getBoundingClientRect();
      const canvs = sketch.createCanvas(containerSize.height * 2, containerSize.height);
      sketch.noLoop();
      canvs.mouseOver(() => sketch.loop())
      canvs.mouseOut(() => sketch.noLoop())
      sketch.frameRate(6);

    };

    sketch.draw = function () {
        let rrrValue = (0.015 * sketch.height);
        sketch.clear();        
        //p ground layer
        sketch.fill (sketch.color(248, 244, 237));
        sketch.noStroke();
        sketch. beginShape();

        sketch.vertex(1.19 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 21.11 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(10.63 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 21.11 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(20.07 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 21.11 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(20.07 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 32.78 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(27.48 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 23.01 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(37.19 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 20.33 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(48.18 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 23.01 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(56.59 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 30.61 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(61.96 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 49.89 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(56.59 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 68.9 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(45.36 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 77.42 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(27.48 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 75.21 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(20.07 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 65 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(20.07 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 78.56 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(20.07 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 93.89 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(20.07 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 100 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(14.7 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 100 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(7.94 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 100 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(1.19 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 100 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(1.19 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 91.08 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(1.19 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 82.17 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(1.19 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 64.33 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(1.19 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 52.81 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(1.19 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 41.3 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));

        sketch.endShape(sketch.CLOSE);

        //p black top layer
        sketch.fill (sketch.color(26, 26, 26));
        sketch.noStroke();
        sketch. beginShape();

        sketch.vertex(23.25 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 38.42 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(31.85 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 34.56 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(41.05 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 41.3 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(42.52 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 49.89 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(40.3 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 59.45 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(31.85 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 64.33 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(22.78 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 59.45 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(20.19 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 48.89 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));

        sketch.endShape(sketch.CLOSE);

        //5 layer
        sketch.fill (sketch.color(248, 244, 237));
        sketch.noStroke();
        sketch. beginShape();

        sketch.vertex(74.78 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 0 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(91.89 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 0 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(108.72 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 0 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(125.55 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 0 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(125 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 7.5 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(124.44 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 15 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(116.19 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 15 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(101.37 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 15 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(91.89 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 15 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(90.11 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 24.94 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(88.33 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 34.89 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(107.33 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 24.22 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(120.72 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 29 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(125.55 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 35.53 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(128.44 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 49.78 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(125.99 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 62.44 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(120.72 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 70.21 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(110.69 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 76.44 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(97.55 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 78.56 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(88.33 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 77.42 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(74.78 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 70.21 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(66.67 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 57 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(72.25 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 55.75 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(78.63 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 54.32 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(85 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 52.89 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(90.11 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 59.45 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(98.11 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 62.44 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(107.05 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 57 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(108.44 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 50.22 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(102.61 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 39.14 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(97.78 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 38.11 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(86.44 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 46.22 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(76.72 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 46.22 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(67 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 46.22 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(68.31 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 38.42 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(69.63 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 30.61 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
        sketch.vertex(72.25 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 15 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));


        sketch.endShape(sketch.CLOSE);



    }
  
    
  
    sketch.windowResized = function() {
      const containerSize = container1.getBoundingClientRect();
      sketch.resizeCanvas(containerSize.width, containerSize.height)
    }
  
    return sketch;
  }
  
  new p5(scribblep5, container1)