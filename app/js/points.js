/*global $:true, console:true Path:true, Point:true, Color:true, Group:true*/

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
	var glyphScale = 60;

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

	// draw guides
	function drawGuide () {
		var path = new Path();
		path.add(glyphPoints[0], glyphPoints[3], glyphPoints[7], glyphPoints[9], glyphPoints[1], glyphPoints[3], glyphPoints[9], glyphPoints[10], glyphPoints[7], glyphPoints[1], glyphPoints[0], glyphPoints[10]);

		var path2 = new Path();
		path2.add(glyphPoints[4], glyphPoints[6]);

		var guides = new Group(path, path2);
		guides.strokeColor = '5CF';
		guides.sendToBack();
	}

	scaleGlyph(glyphScale);
	setStart(glyphStart[0], glyphStart[1]);
	drawGuide();

	glyph.add(glyphPoints[4], glyphPoints[6]);

})();