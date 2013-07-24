/*global $:true, console:true Path:true, Point:true, Color:true, Group:true, Shape:true*/

/*  GLYPH COORDINATES SYSTEM

       0   1   2
       _________

0  |       A        A(0): [1,0]
   |     / | \      
1  |   B - C - D    B(1): [0,1]   C(2): [1,1]   D(3): [2,1]
   |   | \ | / |    
2  |   E - F - G    E(4): [0,2]   F(5): [1,2]   G(6): [2,2]
   |   | / | \ |    
3  |   H - I - J    H(7): [0,3]   I(8): [1,3]   J(9): [2,3]
   |     \ | /      
4  |       K        K(10):[1,4] */

(function (){
  'use strict';

  // all glyph coordinates
  var glyphPoints = [[1,0], [0,1], [1,1], [2,1], [0,2], [1,2], [2,2], [0,3], [1,3], [2,3], [1,4]];

  // set coordinate grid size 
  var glyphScale = 30;

  // scale all glyph points
  for (var i = glyphPoints.length - 1; i >= 0; i--) {
    glyphPoints[i][0] *= glyphScale;
    glyphPoints[i][1] *= glyphScale;
  }

  // draw a dot on each of the coordinate points
  function drawDots (startX, startY) {
    for (var i = glyphPoints.length - 1; i >= 0; i--) {
      // create a circle for each glyphPoint
      var dot = new Shape.Circle(new Point(glyphPoints[i][0] + (startX * glyphScale), glyphPoints[i][1] + (startY * glyphScale)), 0.05 * glyphScale);
      
      // group and style dots   
      var dots = new Group(dot);
      dots.fillColor = '000';
      dots.sendToBack();
    }
  }

  // draw a random glyph
  function drawGlyph (startX, startY) {
    // get a random point
    function randPoint () {
      var i = glyphPoints[Math.floor(Math.random() * glyphPoints.length)];

      return [i[0] + (startX * glyphScale), i[1] + (startY * glyphScale)];
    }

    // initalize glyph
    var glyph = new Path();

    // set glyph styles
    glyph.style = {
      strokeColor: "000",
      strokeWidth: 0.25 * glyphScale,
      strokeCap: 'round',
      strokeJoin: 'round'
    };

    // conect some random points
    glyph.add(randPoint(), randPoint(), randPoint(), randPoint(), randPoint(), randPoint());
  }

  // draw dots and glyph at start coordinates
  function drawBoth (startX, startY) {
    drawDots(startX, startY);
    drawGlyph(startX, startY);
  }

  // draw a grid of glyphs
  function drawGrid(rows, cols, startX, startY) {
    for ( var i = 0; i < rows  ; i++ ) {
      for (var j = 0; j < cols; j++) {
        drawBoth(i * 4 + startX, j * 5.5 + startY);
      }
    }
  }

  drawGrid(10, 9, 2, 2);

})();