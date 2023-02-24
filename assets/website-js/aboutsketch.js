// The line below adds autocompletion for p5.js which is very Helpful
/* <reference path="../../p5.d.ts" /> */
// HELP: https://repl.it/@vogelino/P5js-Arrays-and-Objects

// Here are the docs for P5.js: https://p5js.org/reference/

const aboutContainer = document.getElementById('sketchAbout');

function aboutsketch(sketch) {


  sketch.setup = function () {
    const containerSize = aboutContainer.getBoundingClientRect();
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
    //a 
    sketch.fill(sketch.color('#F8F4ED'))
    sketch.beginShape();
    sketch.vertex(45.8484 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 51.237 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(45.5667 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 53.7685 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(41.4064 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 58.175 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(35.0371 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 59.7971 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(29.4417 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 60.4921 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(24.9543 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 61.0311 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(19.7506 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 61.9385 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(14.3188 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 63.3922 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(10.2072 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 65.0849 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(5.10112 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 68.739 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(1.57547 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 74.7874 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(0.694824 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 81.3861 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(2.81321 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 89.9165 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(6.73381 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 94.5323 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(10.8335 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 97.0716 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(16.6177 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.8795 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(21.7291 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 99.3353 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(27.2719 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.8795 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(31.2155 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 97.9275 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(35.0371 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 96.3904 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(38.2157 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 94.5323 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(41.4064 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 91.9653 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(44.2808 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 88.7999 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(45.8484 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 86.5745 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(45.8484 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 90.5534 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(45.8484 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 94.5323 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(45.8484 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.3537 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(51.2706 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.3537 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(56.6929 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.3537 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(61.1514 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.3537 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(66.734 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.3537 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(69.6872 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.3537 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(69.6872 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 93.5768 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(69.6872 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 88.7999 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(69.6872 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 83.2091 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(69.6872 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 75.4243 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(69.6872 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 69.3754 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(69.6872 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 63.3922 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(69.6872 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 56.9532 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(69.6872 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 52.0784 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(68.6874 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 44.0853 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(66.734 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 39.119 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(63.0622 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 34.1226 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(59.3589 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 31.0843 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(54.1451 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 28.4121 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(47.1388 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 26.5177 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(38.837 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 25.8556 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(35.8922 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 25.9414 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(28.0308 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 27.0884 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(22.9353 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 28.6681 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(17.8398 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 31.0843 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(14.3188 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 33.3866 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(8.33737 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 39.119 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(3.49939 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 47.591 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(7.64886 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 48.5131 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(12.7443 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 49.6455 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(18.8493 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 51.0021 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(24.9543 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 52.3588 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(28.2729 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 47.591 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(32.479 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 44.8514 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(37.1542 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 44.0853 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(43.3172 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 45.8766 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(45.8484 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 51.237 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.endShape();
  
    //a cutout
    sketch.fill(sketch.color('#1A1A1A'));
    sketch.beginShape();
    sketch.vertex(25.9359 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 78.0206 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(28.0308 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 73.4829 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(31.2155 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 72.019 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(35.8922 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 71.1494 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(38.837 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 70.6945 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(43.3172 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 69.3754 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(45.8484 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 67.9242 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(45.2611 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 72.019 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(43.3172 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 77.1083 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(40.1326 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 80.7628 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(32.6669 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 83.2091 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(29.4417 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 82.7319 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(27.215 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 81.3861 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(25.9359 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 78.0206 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.endShape();
  
    //b
    sketch.fill(sketch.color('#F8F4ED'))
    sketch.beginShape();
    sketch.vertex(81.4653 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.3537 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(85.9579 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.3537 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(90.4504 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.3537 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(92.9982 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.3537 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(97.4567 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.3537 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(101.915 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.3537 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(105.304 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.3537 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(105.304 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 94.5323 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(105.304 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 87.5261 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(105.304 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 82.5079 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(108.613 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 88.7999 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(113.914 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 94.5323 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(120.028 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 97.871 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(128.161 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 99.1951 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(136.555 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 97.9275 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(143.316 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 94.7376 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(149.887 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 88.7999 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(153.893 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 82.5079 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(155.527 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 78.609 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(157.095 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 72.8766 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(158.03 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 63.0162 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(157.696 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 56.9532 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(156.692 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 51.2208 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(154.603 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 44.8514 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(150.959 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 38.2751 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(146.679 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 33.3866 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(143.316 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 30.7111 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(138.857 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 28.2277 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(133.49 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 26.4525 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(126.759 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 25.7154 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(121.023 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 26.331 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(114.654 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 28.9539 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(110.818 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 32.1127 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(108.278 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 35.2974 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(105.304 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 41.0003 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(105.304 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 37.2082 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(105.304 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 27.0884 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(105.304 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 21.9218 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(105.304 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 16.8263 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(105.304 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 11.7308 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(105.304 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 5.3254 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(105.304 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 0.193848 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(101.915 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 0.193848 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(93.6351 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 0.193848 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(89.1766 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 0.193848 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(84.718 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 0.193848 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(81.4653 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 0.193848 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(81.4653 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 5.3254 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(81.4653 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 10.457 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(81.4653 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 15.5524 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(81.4653 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 21.9218 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(81.4653 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 28.6681 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(81.4653 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 35.2974 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(81.4653 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 41.0003 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(81.4653 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 47.591 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(81.4653 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 55.0424 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(81.4653 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 61.0311 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(81.4653 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 65.8703 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(81.4653 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 73.4829 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(81.4653 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 81.2458 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(81.4653 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 87.5261 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(81.4653 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 93.5768 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(81.4653 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.3537 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.endShape();
  
    //b cutout
    sketch.fill(sketch.color('#1A1A1A'));
    sketch.beginShape();
    sketch.vertex(105.304 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 61.7541 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(105.677 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 56.9532 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(107.797 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 50.5838 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(110.818 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 46.8261 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(115.928 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 44.1702 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(120.028 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 43.6646 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(125.31 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 44.8514 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(129.303 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 48.1222 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(131.76 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 52.4947 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(133.091 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 57.5901 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(133.49 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 63.0162 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(133.091 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 68.1242 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(131.779 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 72.8766 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(129.048 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 77.3351 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(125.31 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 80.1266 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(120.028 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 81.2458 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(114.654 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 80.2497 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(110.818 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 77.7906 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(108.278 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 74.5882 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(106.104 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 69.055 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(105.304 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 61.7541 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.endShape();
  
    // o
    sketch.fill(sketch.color('#F8F4ED'))
    sketch.beginShape();
    sketch.vertex(201.945 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 99.3353 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(205.641 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 99.1951 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(213.309 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 97.9275 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(220.385 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 95.3393 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(226.802 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 91.3477 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(231.164 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 87.2429 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(235.397 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 81.2458 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(238.213 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 74.5882 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(239.59 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 68.2056 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(239.946 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 62.5955 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(239.392 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 55.6793 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(235.848 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 44.8514 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(231.164 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 38.0054 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(223.57 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 31.6297 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(213.309 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 27.2749 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(201.945 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 25.8556 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(192.997 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 26.7175 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(181.895 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 30.7111 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(173.889 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 36.757 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(168.684 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 43.6646 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(165.507 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 51.2208 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(164.229 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 57.5901 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(163.943 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 62.5955 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(165.194 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 72.8766 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(169.225 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 82.5079 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(173.889 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 88.4886 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(180.102 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 93.463 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(186.594 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 96.6637 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(192.38 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.3537 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(201.945 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 99.3353 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.endShape();
  
    // o cutout
    sketch.fill(sketch.color('#1A1A1A'));;
    sketch.beginShape();
    sketch.vertex(188.483 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 62.5955 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(189.068 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 55.6793 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(190.418 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 51.2208 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(194.908 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 45.8543 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(201.945 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 44.0853 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(208.981 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 45.8543 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(213.171 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 50.5838 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(214.913 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 56.189 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(215.407 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 62.5955 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(214.913 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 69.055 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(210.062 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 78.609 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(201.945 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 81.1056 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(194.805 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 79.3013 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(189.377 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 70.9658 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(188.483 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 62.5955 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.endShape();
  
    //u
    sketch.fill(sketch.color('#F8F4ED'))
    sketch.beginShape();
    sketch.vertex(318.331 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.0707 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(313.378 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.0707 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(308.282 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.0707 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(301.276 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.0707 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(294.269 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.0707 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(294.269 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 90.7814 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(294.269 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 83.492 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(286.391 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 93.463 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(281.955 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 96.6637 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(275.367 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 99.3887 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(268.934 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 100.194 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(262.157 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 99.3887 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(257.698 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 96.4258 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(253.239 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 93.463 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(250.206 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 87.2429 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(248.575 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 77.6888 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(248.41 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 72.4518 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(248.41 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 62.5955 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(248.41 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 56.189 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(248.41 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 48.0361 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(248.41 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 42.9406 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(248.41 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 32.7497 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(248.41 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 27.0171 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(253.239 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 27.0171 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(257.964 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 27.0171 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(265.218 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 27.0171 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(272.472 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 27.0171 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(272.472 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 32.7497 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(272.472 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 41.6668 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(272.472 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 48.0361 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(272.472 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 62.5955 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(272.472 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 68.2056 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(273.483 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 73.7534 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(274.495 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 79.3013 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(281.955 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 82.9258 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(288.942 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 80.095 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(291.83 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 76.2734 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(294.269 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 65.3747 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(294.269 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 56.189 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(294.269 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 48.0361 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(294.269 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 42.9406 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(294.269 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 32.7497 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(294.269 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 27.0171 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(300.002 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 27.0171 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(306.371 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 27.0171 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(312.351 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 27.0171 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(318.331 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 27.0171 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(318.331 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 35.2974 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(318.331 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 44.8514 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(318.331 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 52.4947 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(318.331 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 62.5955 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(318.331 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 70.9658 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(318.331 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 78.609 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(318.331 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 93.463 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(318.331 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 98.0707 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.endShape();
  
    //t
    sketch.beginShape();
    sketch.vertex(360.19 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 100.194 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(365.781 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 100.194 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(371.372 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 100.194 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(371.372 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 92.6921 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(371.372 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 85.1904 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(371.372 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 80.378 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(363.021 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 80.378 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(358.608 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 79.1801 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(356.793 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 74.7164 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(356.793 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 66.5778 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(356.793 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 58.4392 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(356.793 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 52.3529 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(356.793 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 47.1159 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(362.159 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 47.1159 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(367.525 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 47.1159 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(371.372 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 47.1159 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(371.372 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 39.7204 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(371.372 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 32.3248 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(371.372 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 28.0078 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(366.582 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 28.0078 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(361.792 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 28.0078 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(356.793 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 28.0078 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(356.793 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 23.4078 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(356.793 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 12.5799 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(356.793 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 8.75826 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(352.875 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 9.95679 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(348.464 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 11.306 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(338.226 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 14.4378 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(332.731 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 16.1184 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(332.731 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 19.7631 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(332.731 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 23.4078 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(332.731 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 28.0078 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(328.273 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 28.0078 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(323.814 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 28.0078 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(323.814 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 34.9433 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(323.814 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 41.8789 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(323.814 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 47.1159 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(328.273 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 47.1159 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(332.731 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 47.1159 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(332.731 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 51.4329 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(332.731 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 58.4392 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(332.731 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 66.5778 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(332.731 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 74.7164 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(333.147 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 80.378 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(335.386 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 87.7382 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(338.781 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 92.6921 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(343.321 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 96.308 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(350.964 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 99.2476 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.vertex(360.19 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue), 100.194 / 100 * sketch.height + sketch.random(-rrrValue, rrrValue));
    sketch.endShape();
  }


  sketch.windowResized = function () {
    const containerSize = aboutContainer.getBoundingClientRect();
    sketch.resizeCanvas(containerSize.width, containerSize.height)
  }

  return sketch;
}

new p5(aboutsketch, aboutContainer)



