// The line below adds autocompletion for p5.js which is very Helpful
/* <reference path="../../p5.d.ts" /> */
// HELP: https://repl.it/@vogelino/P5js-Arrays-and-Objects

// Here are the docs for P5.js: https://p5js.org/reference/

const contactContainer = document.getElementById('sketchContact');

function aboutsketch(sketch) {


  sketch.setup = function () {
    const containerSize = contactContainer.getBoundingClientRect();
    const canvs = sketch.createCanvas(containerSize.width, containerSize.height);
    sketch.noLoop();
    canvs.mouseOver(() => sketch.loop())
    canvs.mouseOut(() => sketch.noLoop())
    sketch.frameRate(6);
  };


  sketch.draw = function () {
    sketch.clear();
    let rrrValue = (0.015 * sketch.height);

    sketch.noStroke();

    //c 1
    sketch.fill(sketch.color('#F8F4ED'));
    sketch.beginShape();
    sketch.vertex(41.4265 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 99.9998 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(51.9379 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.9376 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(63.2288 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 94.7717 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(73.8662 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 85.7198 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(79.818 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 74.0514 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(73.8662 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 72.6953 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(64.8543 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 70.6419 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(55.8423 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 68.5885 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(51.9379 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 76.225 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(42.3369 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 80.2729 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(33.3902 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 77.6932 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(28.6232 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 71.6234 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(26.5554 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 59.9391 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(28.0477 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 50.8344 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(33.3902 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 42.8841 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(41.123 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 40.2122 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(48.474 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 42.0331 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(52.7192 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 46.1303 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(54.9318 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 51.8966 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(62.1796 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 50.2274 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(71.0746 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 48.1788 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(79.9697 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 46.1303 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(77.6877 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 40.2122 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(71.0746 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 31.4537 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(62.1796 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 25.2291 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(51.9379 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 21.6127 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(41.2747 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 20.4854 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(32.895 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 21.1948 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(24.7008 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 23.4389 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(18.9492 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 26.1758 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(7.49882 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 36.4186 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(1.90817 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 47.6477 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(0 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 60.8495 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(1.03099 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 70.106 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(7.49882 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 84.1216 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(14.0641 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 90.8951 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(22.6522 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 96.124 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(31.2696 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.9376 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(41.4265 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 99.9998 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.endShape();



    // o
    sketch.fill(sketch.color('#F8F4ED'));
    sketch.beginShape();
    sketch.vertex(122.684 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 99.2623 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(126.646 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 99.112 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(134.868 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 97.753 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(142.454 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 94.9782 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(149.334 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 90.6988 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(154.01 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 86.2981 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(158.548 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 79.8688 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(161.567 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 72.7312 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(163.043 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 65.8884 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(163.426 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 59.8738 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(162.831 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 52.4591 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(159.032 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 40.8506 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(154.01 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 33.511 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(145.868 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 26.6757 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(134.868 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 22.0069 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(122.684 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 20.4854 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(113.091 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 21.4093 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(101.189 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 25.6908 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(92.6057 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 32.1726 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(87.0256 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 39.5782 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(83.6194 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 47.6791 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(82.2489 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 54.5076 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(81.9424 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 59.8738 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(83.2843 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 70.8961 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(87.6059 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 81.2218 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(92.6057 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 87.6336 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(99.2662 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 92.9666 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(106.227 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 96.3981 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(112.43 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.21 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(122.684 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 99.2623 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.endShape();

    // o cutout
    sketch.fill(sketch.color('#1A1A1A'));
    sketch.beginShape();
    sketch.vertex(108.252 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 59.8738 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(108.879 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 52.4591 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(110.326 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 47.6791 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(115.14 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 41.9258 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(122.684 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 40.0293 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(130.228 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 41.9258 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(134.72 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 46.9963 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(136.588 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 53.0055 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(137.116 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 59.8738 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(136.588 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 66.799 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(131.387 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 77.0418 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(122.684 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 79.7184 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(115.03 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 77.784 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(109.21 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 68.8476 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(108.252 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 59.8738 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.endShape();

    //n
    sketch.fill(sketch.color('#F8F4ED'));
    sketch.beginShape();
    sketch.vertex(173.445 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 44.6128 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(173.445 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 31.4537 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(173.445 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 22.7615 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(180.34 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 22.7615 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(187.235 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 22.7615 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(194.064 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 22.7615 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(199.242 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 22.7615 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(199.242 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 27.7015 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(199.242 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 38.3913 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(207.687 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 27.7015 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(212.443 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 24.27 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(219.506 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 21.3486 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(226.404 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 20.4854 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(233.669 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 21.3486 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(243.229 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 27.7015 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(246.482 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 34.37 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(248.23 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 44.6128 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(248.407 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 50.2274 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(248.407 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 61.4613 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(248.407 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 72.6953 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(248.407 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 79.4383 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(248.407 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 88.3154 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(248.407 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.9376 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(238.99 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.9376 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(229.572 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.9376 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(222.61 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.9376 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(222.61 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 88.3154 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(222.61 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 77.6932 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(222.61 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 65.2501 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(222.61 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 54.7797 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(220.442 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 42.8841 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(212.443 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 38.9983 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(204.953 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 42.0332 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(201.857 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 46.1303 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(199.242 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 57.8146 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(199.242 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 67.7539 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(199.242 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 77.6932 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(199.242 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 88.3154 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(199.242 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.9376 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(190.65 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.9376 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(186.553 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.9376 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(179.724 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.9376 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(173.445 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.9376 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(173.445 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 88.3154 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(173.445 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 77.6932 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(173.445 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 68.5885 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(173.445 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 54.7797 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(173.445 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 44.6128 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.endShape();



    //t 1
    sketch.fill(sketch.color('#F8F4ED'));
    sketch.beginShape();
    sketch.vertex(293.02 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.0273 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(299.014 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.0273 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(305.008 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.0273 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(305.008 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 89.9848 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(305.008 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 81.9423 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(305.008 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 76.783 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(296.055 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 76.783 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(291.323 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 75.4987 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(289.378 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 70.7132 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(289.378 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 61.9879 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(289.378 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 53.2625 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(289.378 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 46.7375 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(289.378 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 41.1229 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(295.131 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 41.1229 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(300.883 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 41.1229 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(305.008 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 41.1229 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(305.008 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 33.1942 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(305.008 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 25.2655 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(305.008 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 20.6373 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(299.873 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 20.6373 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(294.737 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 20.6373 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(289.378 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 20.6373 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(289.378 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 15.7056 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(289.378 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 4.09711 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(289.378 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 0 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(285.177 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 1.28494 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(280.449 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 2.73141 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(269.472 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 6.08901 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(263.581 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 7.89074 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(263.581 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 11.7982 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(263.581 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 15.7056 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(263.581 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 20.6373 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(258.801 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 20.6373 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(254.021 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 20.6373 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(254.021 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 28.0728 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(254.021 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 35.5083 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(254.021 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 41.1229 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(258.801 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 41.1229 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(263.581 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 41.1229 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(263.581 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 45.7511 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(263.581 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 53.2625 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(263.581 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 61.9879 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(263.581 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 70.7132 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(264.027 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 76.783 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(266.427 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 84.6737 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(270.067 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 89.9848 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(274.935 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 93.8614 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(283.129 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 97.0129 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(293.02 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.0273 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.endShape();

    //a
    sketch.fill(sketch.color('#F8F4ED'));
    sketch.beginShape();
    sketch.vertex(358.424 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 47.6965 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(358.122 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 50.4105 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(353.662 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 55.1347 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(346.834 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 56.8737 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(340.835 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 57.6188 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(336.024 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 58.1967 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(330.445 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 59.1695 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(324.622 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 60.728 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(320.214 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 62.5427 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(314.74 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 66.4603 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(310.96 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 72.9447 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(310.016 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 80.0191 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(312.287 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 89.1645 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(316.49 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 94.1131 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(320.885 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 96.8355 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(327.086 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.7736 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(332.566 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 99.2623 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(338.509 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.7736 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(342.737 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 97.753 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(346.834 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 96.1052 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(350.242 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 94.1131 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(353.662 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 91.3609 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(356.744 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 87.9674 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(358.424 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 85.5816 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(358.424 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 89.1645 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(358.424 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 92.7474 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(358.424 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 95.4788 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(358.424 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.21 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(362.872 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.21 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(367.319 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.21 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(370.734 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.21 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(374.831 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.21 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(379.611 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.21 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(383.982 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.21 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(383.982 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 90.6988 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(383.982 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 72.9447 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(383.982 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 65.5867 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(383.982 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 57.6188 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(383.982 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 48.5985 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(382.91 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 40.0293 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(380.816 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 34.7049 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(376.879 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 29.3483 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(372.909 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 26.0909 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(367.319 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 23.2261 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(359.808 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 21.1952 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(350.908 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 20.4854 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(347.75 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 20.5773 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(339.322 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 21.807 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(333.859 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 23.5006 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(328.397 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 26.0909 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(324.622 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 28.5592 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(318.209 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 34.7049 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(313.022 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 43.7877 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(315.33 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 44.3004 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(317.637 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 44.8131 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(322.251 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 45.8385 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(327.086 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 46.9131 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(331.812 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 47.9631 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(336.024 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 48.8992 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(339.582 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 43.7877 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(344.091 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 40.8506 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(349.103 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 40.0293 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(355.711 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 41.9496 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(358.424 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 47.6965 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.endShape();


    //a cutout
    sketch.fill(sketch.color('#1A1A1A'));
    sketch.beginShape();
    sketch.vertex(337.076 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 76.411 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(339.322 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 71.5462 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(342.737 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 69.9768 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(347.75 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 69.0444 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(350.908 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 68.5568 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(355.711 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 67.1425 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(358.424 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 65.5867 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(357.795 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 69.9768 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(355.711 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 75.4329 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(352.297 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 79.3509 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(344.293 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 81.9735 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(340.835 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 81.462 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(338.448 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 80.0191 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(337.076 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 76.411 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.endShape();

    //c 2
    sketch.fill(sketch.color('#F8F4ED'));
    sketch.beginShape();
    sketch.vertex(434.75 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 99.9998 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(445.262 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.9376 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(456.553 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 94.7717 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(467.19 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 85.7198 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(473.142 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 74.0514 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(467.19 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 72.6953 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(458.178 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 70.6419 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(449.166 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 68.5885 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(445.262 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 76.225 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(435.661 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 80.2729 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(426.714 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 77.6932 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(421.947 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 71.6234 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(419.879 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 59.9391 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(421.371 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 50.8344 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(426.714 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 42.8841 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(434.447 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 40.2122 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(441.798 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 42.0331 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(446.043 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 46.1303 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(448.255 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 51.8966 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(455.503 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 50.2274 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(464.398 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 48.1788 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(473.293 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 46.1303 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(471.011 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 40.2122 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(464.398 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 31.4537 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(455.503 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 25.2291 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(445.262 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 21.6127 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(434.598 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 20.4854 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(426.219 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 21.1948 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(418.025 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 23.4389 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(412.273 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 26.1758 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(400.823 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 36.4186 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(395.232 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 47.6477 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(393.324 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 60.8495 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(394.355 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 70.106 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(400.823 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 84.1216 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(407.388 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 90.8951 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(415.976 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 96.124 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(424.593 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.9376 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(434.75 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 99.9998 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.endShape();


    //t2
    sketch.fill(sketch.color('#F8F4ED'));
    sketch.beginShape();
    sketch.vertex(514.265 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.0273 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(520.259 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.0273 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(526.253 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.0273 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(526.253 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 89.9848 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(526.253 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 81.9423 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(526.253 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 76.783 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(517.3 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 76.783 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(512.568 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 75.4987 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(510.623 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 70.7132 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(510.623 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 61.9879 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(510.623 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 53.2625 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(510.623 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 46.7375 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(510.623 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 41.1229 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(516.375 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 41.1229 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(522.128 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 41.1229 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(526.253 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 41.1229 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(526.253 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 33.1942 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(526.253 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 25.2655 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(526.253 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 20.6373 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(521.117 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 20.6373 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(515.982 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 20.6373 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(510.623 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 20.6373 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(510.623 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 15.7056 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(510.623 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 4.09711 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(510.623 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 0 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(506.422 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 1.28494 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(501.693 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 2.73141 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(490.716 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 6.08901 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(484.826 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 7.89074 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(484.826 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 11.7982 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(484.826 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 15.7056 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(484.826 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 20.6373 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(480.046 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 20.6373 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(475.266 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 20.6373 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(475.266 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 28.0728 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(475.266 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 35.5083 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(475.266 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 41.1229 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(480.046 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 41.1229 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(484.826 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 41.1229 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(484.826 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 45.7511 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(484.826 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 53.2625 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(484.826 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 61.9879 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(484.826 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 70.7132 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(485.272 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 76.783 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(487.672 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 84.6737 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(491.312 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 89.9848 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(496.179 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 93.8614 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(504.373 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 97.0129 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(514.265 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.0273 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.endShape();






  }


  sketch.windowResized = function () {
    const containerSize = contactContainer.getBoundingClientRect();
    sketch.resizeCanvas(containerSize.width, containerSize.height)
  }

  return sketch;
}

new p5(aboutsketch, contactContainer)




