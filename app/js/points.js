/*global $:true, console:true Path:true, Point:true, Color:true */
(function (){
  'use strict';

    // points basics
    var pV = 1;
    var pW = 2;
    var pX = 3;
    var pY = 4;
    var pZ = 5;

    var scale = 40;

  // points coordinates
  var pA = new Point( pW * scale, pV * scale );
  var pB = new Point( pV * scale, pW * scale );
  var pC = new Point( pW * scale, pW * scale );
  var pD = new Point( pX * scale, pW * scale );
  var pE = new Point( pV * scale, pX * scale );
  var pF = new Point( pW * scale, pX * scale );
  var pG = new Point( pX * scale, pX * scale );
  var pH = new Point( pV * scale, pY * scale );
  var pI = new Point( pW * scale, pY * scale );
  var pJ = new Point( pX * scale, pY * scale );
  var pK = new Point( pW * scale, pZ * scale );

  // all points array
  var allPoints = [pA, pB, pC, pD, pE, pF, pG, pH, pI, pJ, pK];

  // get a random point
  function randPoint () {
    return allPoints[Math.floor(Math.random() * allPoints.length)];
  }

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

  // path setup
  var path = new Path();
  path.style = {
    strokeColor: new Color(0, 0.80),
    strokeWidth: 0.3 * scale,
    strokeCap: 'round',
    strokeJoin: 'round'
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

  // draw a line between some random points
  path.moveTo(randPoint());
  path.lineTo(randPoint());
  path.lineTo(randPoint());
  path.lineTo(randPoint());
  path.lineTo(randPoint());
  path.lineTo(randPoint());

})();