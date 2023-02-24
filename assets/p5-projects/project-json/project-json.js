// The line below adds autocompletion for p5.js which is very Helpful
// / <reference path="./p5.d.ts" />

// HELP: https://repl.it/@vogelino/P5js-Arrays-and-Objects

// Here are the docs for P5.js: https://p5js.org/reference/
//https://www.berlin.de/sen/wgpg/service/presse/2022/pressemitteilung.1199238.php
//https://www.berlin.de/sen/gesundheit/service/gesundheitsberichterstattung/gesundheit-und-sozialstruktur/

const jsonContainer = document.getElementById('sketchJson');

function jsonSketch(sketch) {

    //json
    let jsonURL = "../assets/p5-projects/project-json/project-json-data.json"
    let jsonContents;

    //spacing and sizing
    let 
        padding, 
        framePadding, 
        spaceBetweenCircles, 
        radiusCircle, 
        circleDiameter, 
        spaceBetweenTextCircle, 
        indicatorSize, 
        spaceBetweenTextIndicator,
        xOffset,
        yOffset,
        sText,
        smallTextSize,
        bigTextSize,
        circleStrokeWeight,
        offWhite,
        offBlack
    ;
    console.log(jsonContainer);

  sketch.setup = function() {
    const containerSize = jsonContainer.getBoundingClientRect();
    const canvs = sketch.createCanvas(containerSize.width, containerSize.height);
    canvs.mouseOver(() => sketch.loop())
    canvs.mouseOut(() => sketch.noLoop())

    sketch.loadJSONFile(jsonURL);
    sketch.frameRate(10);

    padding = sketch.width / 24;
    framePadding = padding * 2;
    spaceBetweenCircles = padding;

    radiusCircle = 0.5 * ((sketch.width - framePadding - spaceBetweenCircles * 5) / 6);
    circleDiameter = radiusCircle * 2;
    spaceBetweenTextCircle = radiusCircle + radiusCircle / 2;
    indicatorSize = radiusCircle / 2;
    spaceBetweenTextIndicator = indicatorSize + indicatorSize / 2;

    xOffset = spaceBetweenCircles + circleDiameter;
    yOffset = radiusCircle + spaceBetweenTextCircle + spaceBetweenCircles;

    //styling
    offWhite = 250;

    offBlack = 30;
    sText = sketch.width / 84; 
    smallTextSize = sketch.width / 84; 
    bigTextSize = radiusCircle / 1.375;
    circleStrokeWeight = sketch.width / 2000;
  };

  sketch.draw = function() {
        if (!jsonContents) {
            return
        }

        sketch.fill(offBlack);
        sketch.background(offWhite);

        //title
        sketch.textSize(bigTextSize);
        sketch.textAlign(sketch.LEFT);
        sketch.text(
            'Gesundheits-und Sozialstrukturatlas Berlin 2022',
            padding, 
            padding + bigTextSize
        );


        //indicator
        sketch.strokeWeight(circleStrokeWeight);
        sketch.push();
        sketch.translate(
            indicatorSize + padding, 
            indicatorSize + padding + circleDiameter
        );

        for (let amount = 0; amount <= indicatorSize; amount += indicatorSize){
            sketch.textSize(smallTextSize);
            sketch.textAlign(sketch.CENTER);
            sketch.text('nicht so gut', 0, spaceBetweenTextIndicator);
            sketch.text('ganz gut', indicatorSize * 3, spaceBetweenTextIndicator);        
            
            sketch.beginShape();
            sketch.noFill();
            for (let angle = 0; angle < 360; angle += 2) {
                let nRadius = sketch.random (amount, indicatorSize)
                x = nRadius * sketch.cos(Math.PI / 180 * angle);
                y = nRadius * sketch.sin(Math.PI / 180 * angle);
                sketch.vertex(x, y);
            }
            sketch.endShape();
            sketch.translate(indicatorSize * 3, 0);
        }
        sketch.pop();

        sketch.push();
        sketch.translate(
            //pushing to left side inside padding
            radiusCircle + padding, 
            //pushing to third row
            (radiusCircle + padding) + (radiusCircle * 3 + spaceBetweenCircles * 2)
            );    
    
        for (let index = 0; index < jsonContents.length/2; index ++){
            sketch.push();
            //creating grid
            sketch.translate(index * xOffset, 0)
            sketch.drawFuzzyCircle(index);
            sketch.pop();
        }
        //second row
        for (let index = jsonContents.length/2; index < jsonContents.length; index ++){
            sketch.push();
            sketch.translate(index * xOffset - xOffset * jsonContents.length/2, yOffset)
            sketch.drawFuzzyCircle(index);
            sketch.pop();
        }
        sketch.pop();
    };


    sketch.drawFuzzyCircle = function (index) {
        // //helping bounding box 
        // fill('red');
        // rect (
        //     -radiusCircle, 
        //     -radiusCircle, 
        //     circleDiameter, 
        //     radiusCircle + spaceBetweenTextCircle
        // );
    
        this.x;
        this.y;
        let outburst = sketch.map(jsonContents[index].GESIx_2022, -1.64, 1.56, -radiusCircle, 0)
    
        sketch.stroke(offBlack);
        sketch.strokeWeight(circleStrokeWeight);
        sketch.fill(offWhite);   
    
        sketch.beginShape();
        for (let angle = 0; angle < 360; angle += 2) {
    
            let mappedRadius = sketch.map(jsonContents[index].GESIx_2022, -1.6312941, 1.5523623, radiusCircle, radiusCircle)
            let polarMinRadius = mappedRadius;
            let polarMaxRadius = polarMinRadius + outburst;
    
            let nRadius = sketch.random (polarMinRadius, polarMaxRadius)
            this.x = nRadius * sketch.cos(Math.PI / 180 * angle);
            this.y = nRadius * sketch.sin(Math.PI / 180 * angle);
            sketch.vertex(this.x, this.y);
        }
        sketch.endShape(sketch.CLOSE);
        
        sketch.noStroke();
        sketch.fill(offBlack);
        sketch.textAlign(sketch.CENTER);
        sketch.textSize(sText);
        sketch.text(jsonContents[index].bezNAME, 0, spaceBetweenTextCircle);
    }
    sketch.loadJSONFile = async function (path){
        let response = await fetch(path)
        let json = await response.json()
        jsonContents = json
    }
    

  sketch.windowResized = function() {
    const containerSize = jsonContainer.getBoundingClientRect();
    sketch.resizeCanvas(containerSize.width, containerSize.height)

    padding = sketch.width / 24;
    framePadding = padding * 2;
    spaceBetweenCircles = padding;

    radiusCircle = 0.5 * ((sketch.width - framePadding - spaceBetweenCircles * 5) / 6);
    circleDiameter = radiusCircle * 2;
    spaceBetweenTextCircle = radiusCircle + radiusCircle / 2;
    indicatorSize = radiusCircle / 2;
    spaceBetweenTextIndicator = indicatorSize + indicatorSize / 2;

    xOffset = spaceBetweenCircles + circleDiameter;
    yOffset = radiusCircle + spaceBetweenTextCircle + spaceBetweenCircles;

    //styling
    offWhite = 250;
    offBlack = 30;
    sText = sketch.width / 84; 
    smallTextSize = sketch.width / 84; 
    bigTextSize = radiusCircle / 1.375;
    circleStrokeWeight = sketch.width / 2000;
  }

  return sketch;
}


new p5(jsonSketch, jsonContainer)