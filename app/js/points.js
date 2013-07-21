/*global $:true, console:true Path:true, Point:true, Color:true */
(function (){
  'use strict';

  // points basics
  var pX1 = 1;
  var pX2 = 2;
  var pX3 = 3;

  var pY1 = 1;
  var pY2 = 2;
  var pY3 = 3;
  var pY4 = 4;
  var pY5 = 5;

  var scale = 40;

  // points coordinates
  var pA = new Point( pX2 * scale, pY1 * scale );
  var pB = new Point( pX1 * scale, pY2 * scale );
  var pC = new Point( pX2 * scale, pY2 * scale );
  var pD = new Point( pX3 * scale, pY2 * scale );
  var pE = new Point( pX1 * scale, pY3 * scale );
  var pF = new Point( pX2 * scale, pY3 * scale );
  var pG = new Point( pX3 * scale, pY3 * scale );
  var pH = new Point( pX1 * scale, pY4 * scale );
  var pI = new Point( pX2 * scale, pY4 * scale );
  var pJ = new Point( pX3 * scale, pY4 * scale );
  var pK = new Point( pX2 * scale, pY5 * scale );

  // all points array
  var allPoints = [pA, pB, pC, pD, pE, pF, pG, pH, pI, pJ, pK];

  // get a random point
  function randPoint () {
    return allPoints[Math.floor(Math.random() * allPoints.length)];
  }

  function drawGuide () {
    // guide path setup
    var guide = new Path();
    guide.style = {
      strokeColor: '77EEFF',
      strokeWidth: 1

    };

    var guideTwo = new Path();
    guideTwo.style = {
      strokeColor: '77EEFF',
      strokeWidth: 1
    };

    // draw guides
    guide.moveTo(pA);
    guide.lineTo(pD);
    guide.lineTo(pH);
    guide.lineTo(pK);
    guide.lineTo(pJ);
    guide.lineTo(pH);
    guide.lineTo(pB);
    guide.lineTo(pD);
    guide.lineTo(pJ);
    guide.lineTo(pB);
    guide.lineTo(pA);
    guide.lineTo(pK);

    guideTwo.moveTo(pE);
    guideTwo.lineTo(pG);
  }

  function drawGlyph () {
    // path setup
    var path = new Path();
    path.style = {
      strokeColor: new Color(0, 0.80),
      strokeWidth: 0.3 * scale,
      strokeCap: 'round',
      strokeJoin: 'round'
    };

    // draw a line between some random points
    path.moveTo(randPoint());
    path.lineTo(randPoint());
    path.lineTo(randPoint());
    path.lineTo(randPoint());
    path.lineTo(randPoint());
    path.lineTo(randPoint());
  }

  // drawGuide();
  // drawGlyph();

  function glyphGrid () {
    for (var i = 1; i <= 3; ++i) {
      drawGuide();
      drawGlyph();
    }  
  }

  glyphGrid();

})();