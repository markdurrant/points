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

	// set glyph starting point
	var glyphStart = [60, 60];

	// initalize glyph
	var glyph = new Path();

	// set glyph styles
	glyph.style = {
		strokeColor: "000",
	strokeWidth: 0.35 * glyphScale,
	strokeCap: 'round',
	strokeJoin: 'round'
	};

	// scale all glyph points
	function scaleGlyph (glyphScale) {
		for (var i = glyphPoints.length - 1; i >= 0; i--) {
			glyphPoints[i][0] *= glyphScale;
			glyphPoints[i][1] *= glyphScale;
		}		
	}

	// start glyph starting position
	function setStart (glyphStartX, glyphStartY) {
		for (var i = glyphPoints.length - 1; i >= 0; i--) {
			glyphPoints[i][0] += glyphStartX;
			glyphPoints[i][1] += glyphStartY;
		}
	}

	// draw a dot on each of the coordinate points
	function drawDots () {
		for (var i = glyphPoints.length - 1; i >= 0; i--) {
			var dot = new Shape.Circle(new Point(glyphPoints[i]), 0.05 * glyphScale);
			dot.fillColor = '000';

			var dots = new Group(dot);
			dots.sendToBack();
		}
	}

	// get a random point
	function randPoint () {
		return glyphPoints[Math.floor(Math.random() * glyphPoints.length)];
	}

	scaleGlyph(glyphScale);
	setStart(glyphStart[0], glyphStart[1]);
	drawDots();

	glyph.add(randPoint(), randPoint(), randPoint(), randPoint(), randPoint(), randPoint());

})();