// The line below adds autocompletion for p5.js which is very Helpful
{/* <reference path="../../p5.d.ts" /> */}
// HELP: https://repl.it/@vogelino/P5js-Arrays-and-Objects

// Here are the docs for P5.js: https://p5js.org/reference/

const container2 = document.getElementById('scribblesketch');

function scribblesketch(sketch) {
   
  
    sketch.setup = function() {
      const containerSize = container2.getBoundingClientRect();
      const canvs = sketch.createCanvas(containerSize.height * 4.56, containerSize.height);
      sketch.noLoop();
      canvs.mouseOver(() => sketch.loop())
      canvs.mouseOut(() => sketch.noLoop())
      sketch.frameRate(6);

    };

    sketch.draw = function () {
        let rrrValue = (0.015 * sketch.height);
        let black = sketch.color(26, 26, 26);
        let sand = sketch.color(248, 244, 237);
        
        sketch.clear();
        
        //p ground layer
        sketch.noStroke();
        sketch.fill (sand);
  
          //s
          sketch.beginShape();
            sketch.vertex(27.6592 / 100 *  sketch.height + sketch.random(-rrrValue / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), rrrValue) / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 78.5556 / 100 *  sketch.height + sketch.random(-rrrValue / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), rrrValue));
            sketch.vertex(36.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 77.5818 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(45 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 73.8403 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(50.2649 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 68 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(52.437 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 59.3333  / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(51.4713 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue), 53.8889  / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(45 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),46.9364 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(35.437 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),43.6667 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(28.3259 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),42.2573 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(23.1037 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),41.2222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(18.2148 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),37.3333 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(20.2148 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),34.4582 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(24.6592 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),33.6667 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(32.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),36.2673 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(34.7703 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),39.8889 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(38.7323 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),39 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(47.8736 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),36.9491 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(52.1037 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),36 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(47.8736 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),28.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(38 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),22.216 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(25.3259 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),20.3333 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(17.3259 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),21.1838 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(12 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),22.9638 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(4.78731 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),28.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(1.54812 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),38.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(2.25177 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),43 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(6 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),48.4269 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(16 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),52.9065 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(20.2148 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),53.8889 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(25.0481 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),54.8889 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(29.8815 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),55.8889 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(33.3965 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),57.0232 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(35.7704 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),60.4445 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(34 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),63.8782 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(28.3259 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),65.2222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(24.6592 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),64.7713 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(18.9405 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),60.4445 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(17.3259 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),56.6667 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(13 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),57.6059 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(4 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),59.5598 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(0.437012 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),60.3333 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(3 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),66.5639 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(9 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),73.2098 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(19.6089 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(27.6592 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),78.5556 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
          sketch.endShape();


            //k 
          sketch.beginShape();
            sketch.vertex(59.2226 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(63 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(68 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(75 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(78.1115 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(78.1115 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),72.8889 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(78.1115 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),68 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(78.1115 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),62.4445 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(82.5559 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),57.8889 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(86.1698 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),62.4445 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(90.577 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),68 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(95.2101 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),73.8403 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(98.3337 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(103.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(109 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(114.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(118.889 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(114.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),72.2324 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(108.951 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),65.2222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(103.147 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),57.8889 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(97.0004 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),50.1235 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(94.0004 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),46.3333 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(99.0439 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),41.2222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(105.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),34.6797 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(113.023 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),27.0556 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(115.785 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),24.2569 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(118.889 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),21.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(113.023 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),21.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(108.951 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),21.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(102.976 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),21.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(97.0004 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),21.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(93.8912 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),24.2569 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(89.6974 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),28.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(84.5908 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),33.6667 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(78.1115 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),40.2222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(78.1115 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),33.6667 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(78.1115 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),27 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(78.1115 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),20.3333 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(78.1115 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),11 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(78.1115 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),5.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(78.1115 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),0 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(73 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),0 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(68.75 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),0 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(64.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),0 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(59.2226 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),0 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(59.2226 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),6.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(59.2226 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),16 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(59.2226 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),27.0556 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(59.2226 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),38.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(59.2226 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),50.8889 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(59.2226 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),64.3333 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(59.2226 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),73.2098 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(59.2226 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
          sketch.endShape();

            //e 1
          sketch.beginShape();
            sketch.vertex(145.452 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),78.4445 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(152.852 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(162.625 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),74.1389 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(169.494 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),68 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(173.341 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),60.5556 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(170 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),59.8061 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(165.48 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),58.7919 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(160.96 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),57.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(156.007 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),56.6667 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(154.758 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),59.3333 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(151.129 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),63.3437 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(146.341 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),64.5556 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(141 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),63.3437 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(136.839 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),59.3333 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(134.896 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),53.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(140.007 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),53.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(145.118 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),53.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(150 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),53.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(158 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),53.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(166.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),53.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(173.007 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),53.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(173.341 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),47.8889 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(172.421 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),40.2222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(168.847 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),32 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(162.625 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),25.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(155.251 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),21.8033 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(145.452 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),20.3333 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(141 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),20.6115 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(135.563 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),21.8033 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(128.054 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),25.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(121.521 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),32 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(116.763 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),42.5556 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(115.785 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),50.8889 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(116.763 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),58.5644 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(120.347 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),66.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(125.689 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),72.2324 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(131.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),75.7008 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(140.007 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),78.0747 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(145.452 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),78.4445 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
          sketch.endShape();


            //e cutout 1
          sketch.fill (black);
          sketch.beginShape();
            sketch.vertex(135.563 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),42.5556 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(137.367 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),38.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(140.007 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),35.7395 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(145.118 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),34.2222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(148.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),34.7936 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(152.496 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),38 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(154.23 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),42.5556 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(151.129 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),42.5556 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(147.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),42.5556 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(141.531 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),42.5556 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(138.547 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),42.5556 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(135.563 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),42.5556 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
          sketch.endShape();


          sketch.fill (sand);

          //t
          sketch.beginShape();
            sketch.vertex(204.743 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(209.131 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(213.52 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(213.52 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),71.8889 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(213.52 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),66 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(213.52 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),62.2222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(206.965 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),62.2222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(203.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),61.2819 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(202.076 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),57.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(202.076 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),51.3889 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(202.076 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),45 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(202.076 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),40.2222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(202.076 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),36.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(206.288 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),36.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(210.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),36.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(213.52 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),36.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(213.52 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),30.3056 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(213.52 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),24.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(213.52 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),21.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(209.76 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),21.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(206 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),21.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(202.076 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),21.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(202.076 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),17.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(202.076 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),9 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(202.076 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),6 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(199 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),6.94086 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(195.537 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),8 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(187.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),10.4585 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(183.187 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),11.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(183.187 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),14.6389 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(183.187 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),17.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(183.187 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),21.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(179.687 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),21.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(176.187 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),21.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(176.187 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),26.5556 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(176.187 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),32 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(176.187 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),36.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(179.687 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),36.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(183.187 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),36.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(183.187 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),39.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(183.187 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),45 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(183.187 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),51.3889 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(183.187 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),57.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(183.514 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),62.2222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(185.271 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),68 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(187.936 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),71.8889 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(191.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),74.7274 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(197.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.035 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(204.743 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
          sketch.endShape();

          //c
          sketch.beginShape();
            sketch.vertex(247.247 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),78.5556 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(254.944 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(263.211 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),74.7274 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(271 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),68.0994 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(275.358 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),59.5556 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(271 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),58.5626 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(264.401 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),57.0591 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(257.802 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),55.5556 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(254.944 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),61.1472 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(247.914 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),64.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(241.363 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),62.2222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(237.872 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),57.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(236.358 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),49.2222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(237.451 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),42.5556 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(241.363 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),36.7342 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(247.025 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),34.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(252.407 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),36.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(255.516 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),39.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(257.136 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),43.3333 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(262.443 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),42.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(268.956 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),40.6111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(275.469 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),39.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(273.798 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),34.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(268.956 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),28.3646 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(262.443 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),23.8068 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(254.944 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),21.1588 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(247.136 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),20.3333 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(241 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),20.8528 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(235 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),22.496 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(230.789 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),24.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(222.404 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),32 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(218.311 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),40.2222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(216.914 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),49.8889 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(217.668 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),56.6667 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(222.404 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),66.9292 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(227.212 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),71.8889 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(233.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),75.7176 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(239.81 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(247.247 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),78.5556 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
          sketch.endShape();

          //h
          sketch.beginShape();
            sketch.vertex(280.902 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(285.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(290.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(293.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(299.791 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(299.791 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),70 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(299.791 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),62.2222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(299.791 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),54.9445 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(299.791 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),47.6667 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(301.706 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),39.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(303.973 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),36.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(309.458 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),33.8889 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(315.315 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),36.7342 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(316.902 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),45.4445 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(316.902 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),53.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(316.902 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),62.2222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(316.902 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),70 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(316.902 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(322 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(328.896 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(335.791 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(335.791 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),70 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(335.791 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),63.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(335.791 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),58.5626 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(335.791 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),50.3369 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(335.791 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),42.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(335.661 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),38 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(334.381 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),30.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(332 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),25.6171 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(325 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),20.9654 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(319.68 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),20.3333 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(314.629 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),20.9654 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(309.458 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),23.1045 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(305.975 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),25.6171 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(299.791 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),33.4445 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(299.791 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),25.6171 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(299.791 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),19 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(299.791 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),11.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(299.791 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),4.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(299.791 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),0 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(296 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),0 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(291 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),0 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(285.951 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),0 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(280.902 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),0 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(280.902 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),6 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(280.902 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),17.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(280.902 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),28.3646 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(280.902 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),38 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(280.902 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),45.4445 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(280.902 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),55.5556 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(280.902 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),62.2222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(280.902 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),70 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(280.902 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
          sketch.endShape();


          //e 2
          sketch.beginShape();
            sketch.vertex(371.667 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),78.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(379.067 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.4445 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(388.84 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),73.8056 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(395.709 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),67.6667 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(399.556 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),60.2222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(396.215 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),59.4727 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(391.695 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),58.4586 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(387.175 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),57.4445 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(382.222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),56.3333 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(380.973 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),59 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(377.344 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),63.0103 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(372.556 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),64.2222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(367.215 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),63.0103 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(363.054 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),59 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(361.111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),52.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(366.222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),52.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(371.333 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),52.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(376.215 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),52.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(384.215 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),52.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(392.715 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),52.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(399.222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),52.7778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(399.556 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),47.5556 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(398.636 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),39.8889 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(395.062 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),31.6667 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(388.84 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),25.1667 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(381.466 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),21.4699 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(371.667 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),20 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(367.215 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),20.2782 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(361.778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),21.4699 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(354.269 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),25.1667 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(347.736 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),31.6667 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(342.978 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),42.2222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(342 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),50.5556 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(342.978 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),58.231 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(346.561 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),66.1667 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(351.904 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),71.8991 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(357.715 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),75.3674 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(366.222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.7413 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(371.667 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),78.1111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
          sketch.endShape();

          //e 2 cutout
          sketch.fill (black);
          sketch.beginShape();
            sketch.vertex(361.778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),42.2222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(364.052 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),37.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(367.934 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),34.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(371.333 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),33.8889 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(376.215 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),35.1991 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(379 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),38.1301 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(380.444 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),42.2222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(376.215 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),42.2222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(370.5 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),42.2222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(366.139 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),42.2222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(361.778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),42.2222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
          sketch.endShape();

          //s 2
          sketch.fill (sand);
          sketch.beginShape();
            sketch.vertex(431.222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),78.5557 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(440.063 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.5819 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(448.563 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),73.8404 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(453.828 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),68.0002 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(456 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),59.3335 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(455.034 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),53.8891 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(448.563 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),46.9366 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(439 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),43.6668 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(431.889 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),42.2574 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(426.667 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),41.2224 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(421.778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),37.3335 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(423.778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),34.4584 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(428.222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),33.6668 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(436.063 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),36.2675 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(438.333 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),39.8891 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(442.295 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),39.0002 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(451.437 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),36.9492 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(455.667 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),36.0002 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(451.437 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),28.5002 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(441.563 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),22.2162 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(428.889 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),20.3335 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(420.889 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),21.1839 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(415.563 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),22.9639 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(408.35 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),28.5002 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(405.111 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),38.1113 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(405.815 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),43.0002 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(409.563 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),48.4271 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(419.563 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),52.9066 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(423.778 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),53.8891 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(428.611 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),54.8891 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(433.444 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),55.8891 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(436.959 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),57.0234 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(439.333 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),60.4446 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(437.563 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),63.8784 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(431.889 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),65.2224 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(428.222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),64.7714 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(422.503 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),60.4446 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(420.889 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),56.6668 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(416.563 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),57.606 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(407.563 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),59.56 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(404 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),60.3335 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(406.563 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),66.5641 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(412.563 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),73.2099 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(423.172 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),77.7779 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
            sketch.vertex(431.222 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue),78.5557 / 100 *  sketch.height + sketch.random(-rrrValue, rrrValue));
          sketch.endShape();

          
      
    }
  
    
  
    sketch.windowResized = function() {
      const containerSize = container2.getBoundingClientRect();
      sketch.resizeCanvas(containerSize.width, containerSize.height)
    }
  
    return sketch;
  }
  
  new p5(scribblesketch, container2)