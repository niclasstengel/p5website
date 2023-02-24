// The line below adds autocompletion for p5.js which is very Helpful


// HELP: https://repl.it/@vogelino/P5js-Arrays-and-Objects

// Here are the docs for P5.js: https://p5js.org/reference/


// The line below adds autocompletion for p5.js which is very Helpful
// / <reference path="./p5.d.ts" />

// HELP: https://repl.it/@vogelino/P5js-Arrays-and-Objects

// Here are the docs for P5.js: https://p5js.org/reference/


const sandXContainer = document.getElementById('sketchSandX');


function sandXsketch(sketch) {
    
    let sW;
    let rrrValue;
    let rValueCross;

    sketch.setup = function () {
        const containerSize = sandXContainer.getBoundingClientRect();
        const canvs = sketch.createCanvas(containerSize.width, containerSize.height);
        sketch.noLoop();
        canvs.mouseOver(() => sketch.loop())
        canvs.mouseOut(() => sketch.noLoop())
        sketch.frameRate(6);


        rrrValue = (0.005 * sketch.height);
        rValueCross = (0.011 * sketch.height);


        sW = 3 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue);
    };

    sketch.draw = function () {
        
        sketch.clear();
        

        sketch.fill(sketch.color('#F8F4ED'))
        sketch.stroke(sketch.color('#F8F4ED'))
        sketch.strokeWeight(sW)

        let polarMinRadius = 45 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue);
        let polarMaxRadius = 50 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue);;

        //circle
        sketch.push();
        sketch.angleMode(sketch.RADIANS);

        sketch.translate(50 / 100 * sketch.height, 50 / 100 * sketch.height)
        sketch.beginShape();
        for (let angle = 0; angle < 360; angle += 15) {
            let nRadius = sketch.random (polarMinRadius, polarMaxRadius)
            this.x = nRadius * sketch.cos(Math.PI / 180 * angle);
            this.y = nRadius * sketch.sin(Math.PI / 180 * angle);
            sketch.vertex(this.x, this.y);
        }
        sketch.endShape(sketch.CLOSE);
        sketch.pop();
   

        sketch.noFill();
        sketch.stroke(sketch.color('#1A1A1A'))

        
        //cross
        sketch.push()
        sketch.angleMode(sketch.DEGREES);
        // sketch.translate(37.88  / 100 * sketch.height, 37.88  / 100 * sketch.height)
        sketch.translate(0 / 100 * sketch.height + sketch.random(-rValueCross, rValueCross), 0 / 100 * sketch.height + sketch.random(-rValueCross, rValueCross))
        sketch.beginShape();
        sketch.vertex(31.25 / 100 * sketch.height, 31.25 / 100 * sketch.height);
        sketch.vertex(33.2792 / 100 * sketch.height, 33.2792 / 100 * sketch.height);
        sketch.vertex(35.3084 / 100 * sketch.height, 35.3084 / 100 * sketch.height);
        sketch.vertex(38.0141 / 100 * sketch.height, 38.0141 / 100 * sketch.height);
        sketch.vertex(40.0433 / 100 * sketch.height, 40.0433 / 100 * sketch.height);
        sketch.vertex(42.7489 / 100 * sketch.height, 42.7489 / 100 * sketch.height);
        sketch.vertex(44.7781 / 100 * sketch.height, 44.7781 / 100 * sketch.height);
        sketch.vertex(47.4838 / 100 * sketch.height, 47.4838 / 100 * sketch.height);
        sketch.vertex(50.1894 / 100 * sketch.height, 50.1894 / 100 * sketch.height);
        sketch.vertex(69.1288 / 100 * sketch.height, 69.1288 / 100 * sketch.height);
        sketch.vertex(64.3939 / 100 * sketch.height, 64.3939 / 100 * sketch.height);
        sketch.vertex(62.3647 / 100 * sketch.height, 62.3647 / 100 * sketch.height);
        sketch.vertex(60.3355 / 100 * sketch.height, 60.3355 / 100 * sketch.height);
        sketch.vertex(57.6299 / 100 * sketch.height, 57.6299 / 100 * sketch.height);
        sketch.vertex(54.9242 / 100 * sketch.height, 54.9242 / 100 * sketch.height);
        sketch.vertex(52.895 / 100 * sketch.height, 52.895 / 100 * sketch.height);
        sketch.vertex(50.1894 / 100 * sketch.height, 50.1894 / 100 * sketch.height);
        sketch.vertex(69.1288 / 100 * sketch.height, 31.25 / 100 * sketch.height);
        sketch.vertex(67.776 / 100 * sketch.height, 32.6028 / 100 * sketch.height);
        sketch.vertex(61.6883 / 100 * sketch.height, 38.6905 / 100 * sketch.height);
        sketch.vertex(59.6591 / 100 * sketch.height, 40.7197 / 100 * sketch.height);
        sketch.vertex(57.6299 / 100 * sketch.height, 42.7489 / 100 * sketch.height);
        sketch.vertex(54.9242 / 100 * sketch.height, 45.4545 / 100 * sketch.height);
        sketch.vertex(52.895 / 100 * sketch.height, 47.4838 / 100 * sketch.height);
        sketch.vertex(50.1894 / 100 * sketch.height, 50.1894 / 100 * sketch.height);
        sketch.vertex(31.25 / 100 * sketch.height, 69.1288 / 100 * sketch.height);
        sketch.vertex(33.2792 / 100 * sketch.height, 67.0996 / 100 * sketch.height);
        sketch.vertex(35.3084 / 100 * sketch.height, 65.0703 / 100 * sketch.height);
        sketch.vertex(36.6613 / 100 * sketch.height, 63.7175 / 100 * sketch.height);
        sketch.vertex(38.6905 / 100 * sketch.height, 61.6883 / 100 * sketch.height);
        sketch.vertex(40.7197 / 100 * sketch.height, 59.6591 / 100 * sketch.height);
        sketch.vertex(42.7489 / 100 * sketch.height, 57.6299 / 100 * sketch.height);
        sketch.vertex(44.1017 / 100 * sketch.height, 56.2771 / 100 * sketch.height);
        sketch.vertex(46.131 / 100 * sketch.height, 54.2478 / 100 * sketch.height);
        sketch.vertex(48.1602 / 100 * sketch.height, 52.2186 / 100 * sketch.height);
        sketch.vertex(50.1894 / 100 * sketch.height, 50.1894 / 100 * sketch.height);
        sketch.endShape()
        sketch.pop();


    }


    sketch.windowResized = function () {
        const containerSize = sandXContainer.getBoundingClientRect();
        sketch.resizeCanvas(containerSize.width, containerSize.height)
    }

    return sketch;
}

new p5(sandXsketch, sandXContainer)



