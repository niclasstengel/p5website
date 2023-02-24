{/* <reference path="../../p5.d.ts" /> */}

function createScribbleCircle(containerElement) {
  function sketch(s) {
    let canvas;

    s.setup = function() {
      const containerSize = containerElement.getBoundingClientRect();
      canvas = s.createCanvas(containerSize.width, containerSize.width);
      canvas.parent(containerElement);
      s.noLoop();
      canvas.mouseOver(() => s.loop());
      canvas.mouseOut(() => s.noLoop());
      s.frameRate(6);

    };

    s.draw = function() {
      s.clear();
      s.fill(s.color(248, 244, 237));
      s.noStroke();
      s.beginShape();
      for(let angle = 0; angle < 360; angle += 12) {
        const radius = s.height / 2;
        let rValue = 0.05 * radius; 
        let outbreak = s.random(-rValue, rValue);
        const x = (radius + outbreak) * s.cos(s.PI / 180 * angle);
        const y = (radius + outbreak) * s.sin(s.PI / 180 * angle);
        s.vertex(x + s.height / 2, y + s.height / 2);
      }
      s.endShape(s.CLOSE);
    }

    s.windowResized = function() {
      const containerSize = containerElement.getBoundingClientRect();
      s.resizeCanvas(containerSize.width, containerSize.width);
    }
  }

  new p5(sketch);
}

// Define the IDs of the container elements
const containerIds = ['project1', 'project2', 'project3', 'project4', 'project5'];

// Loop over the container IDs and create the scribble circles
for (let i = 0; i < containerIds.length; i++) {
  const container = document.getElementById(containerIds[i]);
  createScribbleCircle(container);
}
